import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import { FaTrashAlt } from 'react-icons/fa';
import '../../../adminContact.css'; // File CSS eksternal
import { getAllUser, deleteUser } from '../../../api/user';
import { Alert } from 'react-bootstrap'; // Pastikan Alert diimpor jika menggunakan React Bootstrap

const AdminContact = () => {
  const [users, setUsers] = useState([]); // Inisialisasi state users dengan array kosong
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState(null);

  // Memanggil API getAllUser untuk mengambil data pengguna
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getAllUser();
        setUsers(data || []); // Pastikan data yang diterima adalah array
      } catch (err) {
        setError('Failed to load users');
        console.error(err);
      } finally {
        setLoading(false); // Selesai memuat data
      }
    };

    fetchUsers();
  }, []);

  const navigate = useNavigate();

  // Fungsi untuk menghapus pengguna
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      // Jika berhasil menghapus, perbarui state dengan menghapus pengguna dari daftar
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      setDeleteStatus('User berhasil dihapus'); // Menampilkan status sukses
    } catch (err) {
      setDeleteStatus('Failed to delete user'); // Menampilkan status gagal
      console.error(err);
    }
  };

  return (
    <AdminLayout
      content={
        <div className="admin-contact-container">
          {loading ? (
            <div className="text-center">
              <p>Loading...</p>
            </div>
          ) : error ? (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          ) : Array.isArray(users) && users.length > 0 ? (
            <>
              {deleteStatus && <p>{deleteStatus}</p>} {/* Menampilkan pesan berdasarkan status delete */}
              <div className="detail-bar">
                <span className="detail-item">Nomor</span>
                <span className="detail-item">Delete</span>
              </div>
              <div className="list-box">
                <ul className="list-container">
                  {users.map((user) => (
                    <li key={user.id} onClick={() => navigate(`/admin/AdminContact/detail/${user.id}`)} className="list-item">
                      <p className="number">{user.phone_number}</p>
                      <p className="date">{user.date}</p>
                      <button
                        className="delete-btn"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent triggering the li click
                          handleDelete(user.id); // Memanggil fungsi delete
                        }}>
                        <FaTrashAlt size={18} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <Alert variant="warning" className="text-center">
              Tidak ada pengguna yang ditemukan.
            </Alert>
          )}
        </div>
      }
    />
  );
};

export default AdminContact;
