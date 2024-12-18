import AdminLayout from '../layout/AdminLayout';
import { useRef, useState } from 'react';
import { ReactComponent as Add } from '../../../assets/images/icon/add.svg';
import { Button, Dropdown } from 'react-bootstrap';
import '../../../addProduct.css'; // File CSS eksternal
import { createProduct } from '../../../api/productApi';

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

const ImageField = ({ image, setImage, preview, setPreview }) => {
  const ref = useRef();

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image')) {
      setImage(selectedFile); // Simpan file asli
      setPreview(URL.createObjectURL(selectedFile)); // Tampilkan preview
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
      {!preview ? (
        <>
          <input type="file" className="image-field-input" ref={ref} onChange={handleFileSelect} />
          <Add className="image-field-icon" />
          <span>Upload Foto</span>
        </>
      ) : (
        <img src={preview} alt="Preview" className="image-field-preview" onClick={handleClear} />
      )}
    </div>
  );
};

const VideoField = ({ video, setVideo, preview, setPreview }) => {
  const ref = useRef();

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('video')) {
      setVideo(selectedFile); // Simpan file asli
      setPreview(URL.createObjectURL(selectedFile)); // Tampilkan preview
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
      {!preview ? (
        <>
          <input type="file" className="video-field-input" ref={ref} onChange={handleFileSelect} />
          <Add className="video-field-icon" />
          <span>Upload Video</span>
        </>
      ) : (
        <video src={preview} controls className="video-field-preview" onClick={handleClear} />
      )}
    </div>
  );
};

const AddProduct = () => {
  const [type, setType] = useState('fish');
  const [category, setCategory] = useState(false); // False represents "Tidak Terdaftar" (not registered)
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
    formData.append('category', type); // Use the type for category (fish, fish_food, or aquarium)

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
    formData.append('registered', category); // True or False for Terdaftar/Tidak Terdaftar

    // console.log(...formData);
    try {
      const { data } = await createProduct(formData);
      console.log(data);

      if (data.data.id) {
        alert('Product added successfully!');
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout
      content={
        <div className="add-product-container">
          <div className="form-container">
            <div className="form-grid">
              <Field label="Nama Produk" value={productName} setValue={setProductName} />
              <Field label="Harga" value={price} setValue={setPrice} type="number" />
              <Field label="Stok" value={stock} setValue={setStock} type="number" />
              <Field label="Diskon" value={discount} setValue={setDiscount} />

              {type === 'fish' && (
                <>
                  <Field label="Warna" value={color} setValue={setColor} />
                  <Field label="Ukuran" value={size} setValue={setSize} />
                  <Field label="Jenis" value={kind} setValue={setKind} />
                </>
              )}

              {type === 'fish_food' && <Field label="Berat" value={weight} setValue={setWeight} />}

              {type === 'aquarium' && <Field label="Volume" value={volume} setValue={setVolume} />}
            </div>

            <div className="description-container">
              <LargeField label="Deskripsi" placeholder="Deskripsi produk" value={description} setValue={setDescription} />
              <div className="dropdown-container">
                <Dropdown onSelect={(e) => setType(e)}>
                  <Dropdown.Toggle variant="secondary">{type}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="fish">Ikan</Dropdown.Item>
                    <Dropdown.Item eventKey="fish_food">Pakan</Dropdown.Item>
                    <Dropdown.Item eventKey="aquarium">Aquarium</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown onSelect={(e) => setCategory(e === 'Terdaftar')}>
                  <Dropdown.Toggle variant="secondary">{category ? 'Terdaftar' : 'Tidak Terdaftar'}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Tidak Terdaftar">Tidak Terdaftar</Dropdown.Item>
                    <Dropdown.Item eventKey="Terdaftar">Terdaftar</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div className="media-upload-grid">
            <ImageField image={image1} setImage={setImage1} preview={image1Preview} setPreview={setImage1Preview} />
            <ImageField image={image2} setImage={setImage2} preview={image2Preview} setPreview={setImage1Preview} />
            <ImageField image={image3} setImage={setImage3} preview={image3Preview} setPreview={setImage1Preview} />
            <VideoField video={video} setVideo={setVideo} preview={videoPreview} setPreview={setVideoPreview} />
          </div>

          <div className="button-container">
            <Button className="cancel-button">Batal</Button>
            <Button className="save-button" onClick={handleSubmit}>
              Simpan
            </Button>
          </div>
        </div>
      }
    />
  );
};

export default AddProduct;
