import AdminLayout from '../layout/AdminLayout';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Add } from '../../../assets/images/icon/add.svg';
import { Button, Dropdown } from 'react-bootstrap';
import { getProductById } from '../../../api/productApi';
import { showImage } from '../../../api/media';

const Field = ({ label, value, setValue, type = 'text' }) => {
  return (
    <div className="field-container">
      <label className="field-label">{label}</label>
      <input className="field-input" value={value} onChange={(e) => setValue(e.target.value)} type={type} />
    </div>
  );
};

const LargeField = ({ label, placeholder, value, setValue }) => {
  return (
    <div className="large-field-container">
      <label className="large-field-label">{label}</label>
      <textarea className="large-field-textarea" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
    </div>
  );
};

const ImageField = ({ image, setImage, preview, setPreview, defaultImage }) => {
  const ref = useRef();

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image')) {
      setImage(selectedFile); // Store the original file
      setPreview(URL.createObjectURL(selectedFile)); // Show preview
    } else {
      alert('Please select a valid image file!');
    }
  };

  const handleClear = () => {
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="image-field-container" onClick={() => (!image ? ref.current.click() : handleClear())}>
      {!preview && !defaultImage ? (
        <>
          <input type="file" className="image-field-input" ref={ref} onChange={handleFileSelect} />
          <Add className="image-field-icon" />
          <span>Upload Foto</span>
        </>
      ) : (
        <img src={preview || defaultImage} alt="Preview" className="image-field-preview" onClick={handleClear} />
      )}
    </div>
  );
};

const VideoField = ({ video, setVideo, preview, setPreview, defaultVideo }) => {
  const ref = useRef();

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('video')) {
      setVideo(selectedFile); // Store the original file
      setPreview(URL.createObjectURL(selectedFile)); // Show preview
    } else {
      alert('Please select a valid video file!');
    }
  };

  const handleClear = () => {
    setVideo(null);
    setPreview(null);
  };

  return (
    <div className="video-field-container" onClick={() => (!video ? ref.current.click() : handleClear())}>
      {!preview && !defaultVideo ? (
        <>
          <input type="file" className="video-field-input" ref={ref} onChange={handleFileSelect} />
          <Add className="video-field-icon" />
          <span>Upload Video</span>
        </>
      ) : (
        <video src={preview || defaultVideo} controls className="video-field-preview" onClick={handleClear} />
      )}
    </div>
  );
};

const EditProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [type, setType] = useState('fish');
  const [category, setCategory] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [discount, setDiscount] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [kind, setKind] = useState('');
  const [weight, setWeight] = useState('');
  const [volume, setVolume] = useState('');
  const [description, setDescription] = useState('');

  const [image1, setImage1] = useState(null);
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image2Preview, setImage2Preview] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image3Preview, setImage3Preview] = useState(null);

  const [video, setVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const [imageURLs, setImageURLs] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getProductById(id);
        setProduct(data);
        setProductName(data.name);
        setPrice(data.price);
        setStock(data.stock);
        setDiscount(data.discount);
        setDescription(data.description);
        setCategory(data.registered); // Keep this as string, not boolean
        setType(data.category);

        if (data.category === 'fish') {
          setColor(data.attributes.color);
          setSize(data.attributes.size);
          setKind(data.attributes.fish_type);
        } else if (data.category === 'fish_food') {
          setWeight(data.attributes.weight);
        } else if (data.category === 'aquarium') {
          setVolume(data.attributes.dimention);
        }
        console.log(data.images[0]?.image_url);

        loadProductImages(data);
        const img1 = await showImage(data.images[0]?.image_url);
        let a = '';

        if (img1) {
          setImage1Preview(await showImage(data.images[0].image_url));
          a = img1;
          console.log('test');
        } else {
          setImage1Preview(a);

          console.warn('Image 1 not found');
        }
        // Set previews for images using image_url from the API response
        // setImage1Preview(imageURLs[1]);
        // setImage2Preview(imageURLs[2]);
        setImage2Preview(await showImage(data.images[1]?.image_url));
        setImage3Preview(await showImage(data.images[2]?.image_url));
        // setImage3Preview(imageURLs[3]);
        setVideoPreview(data.video); // If there's a video, set its preview link
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const loadProductImages = async (productsImg) => {
      const images = {};
      try {
        for (const item of productsImg.images) {
          const url = await showImage(item.image_url); // Ambil URL gambar dari API
          images[item.id] = url; // Simpan URL dengan key ID produk
        }
        setImageURLs(images);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async () => {
    const formData = new FormData();
    let attributes = {};

    // Append images
    if (image1) formData.append('images', image1);
    if (image2) formData.append('images', image2);
    if (image3) formData.append('images', image3);
    if (video) formData.append('video', video);

    // Append other form data
    formData.append('name', productName);
    formData.append('price', price + '.00');
    formData.append('stock', stock);
    formData.append('description', description);
    formData.append('discount', discount);
    formData.append('category', type);

    // Append attributes based on type
    if (type === 'fish') {
      attributes = {
        color: color,
        size: size,
        fish_type: kind,
      };
    } else if (type === 'fish_food') {
      attributes = {
        weight: weight,
      };
    } else if (type === 'aquarium') {
      attributes = {
        dimention: volume,
      };
    }

    formData.append('attributes', JSON.stringify(attributes));

    // Append registration status
    formData.append('registered', category);

    try {
      // Perform API request here (e.g., editProduct API)
      console.log('Product updated!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setProductName('');
    setPrice('');
    setStock('');
    setDiscount('');
    setColor('');
    setSize('');
    setKind('');
    setWeight('');
    setVolume('');
    setDescription('');
    setImage1(null);
    setImage1Preview(null);
    setImage2(null);
    setImage2Preview(null);
    setImage3(null);
    setImage3Preview(null);
    setVideo(null);
    setVideoPreview(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <AdminLayout
      content={
        <div className="edit-product-container">
          <div className="form-container">
            <div className="form-grid">
              <Field label="Nama Produk" value={productName} setValue={setProductName} />
              <Field label="Harga" value={price} setValue={setPrice} type="number" />
              <Field label="Stok" value={stock} setValue={setStock} type="number" />
              <Field label="Diskon" value={discount} setValue={setDiscount} />

              {type === 'fish' && (
                <>
                  <Field label="Color" value={color} setValue={setColor} />
                  <Field label="Size" value={size} setValue={setSize} />
                  <Field label="Fish Type" value={kind} setValue={setKind} />
                </>
              )}
              {type === 'fish_food' && <Field label="Weight" value={weight} setValue={setWeight} />}
              {type === 'aquarium' && <Field label="Volume" value={volume} setValue={setVolume} />}

              <LargeField label="Deskripsi" value={description} setValue={setDescription} placeholder="Deskripsi produk" />

              <ImageField image={image1} setImage={setImage1} preview={image1Preview} setPreview={setImage1Preview} defaultImage={imageURLs[1]} />
              <ImageField image={image2} setImage={setImage2} preview={image2Preview} setPreview={setImage2Preview} defaultImage={imageURLs[2]} />
              <ImageField image={image3} setImage={setImage3} preview={image3Preview} setPreview={setImage3Preview} defaultImage={imageURLs[3]} />

              <VideoField video={video} setVideo={setVideo} preview={videoPreview} setPreview={setVideoPreview} defaultVideo={product?.video} />

              <div className="actions">
                <Button variant="danger" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button variant="success" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default EditProduct;
