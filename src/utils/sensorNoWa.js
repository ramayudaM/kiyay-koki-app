const maskPhoneNumber = (phoneNumber) => {
  if (!phoneNumber || phoneNumber.length < 4) return '****'; // Jika invalid

  const visiblePart = phoneNumber.slice(0, -4); // Ambil bagian awal hingga 4 digit terakhir
  const maskedPart = '*'.repeat(4); // 4 digit terakhir diubah menjadi bintang

  return `${visiblePart}${maskedPart}`;
};

export default maskPhoneNumber;
