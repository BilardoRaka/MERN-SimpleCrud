import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('Berhasil koneksi Database.'))
    .catch((err) => {
      console.error('Koneksi ke Database gagal.');
      console.error(err);
    });
};

export default connectDB;