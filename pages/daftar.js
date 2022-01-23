import Layout from "./components/layout";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Daftar = () => {
    const [jalur, setJalur] = useState('');
    const [tglDftr, setTglDftr] = useState('');
    const [keahlian, setKeahlian] = useState('');
    const [jenisSklh, setJenisSklh] = useState('');
    const [statusSklh, setStatusSklh] = useState('');
    const [thnLulus, setThnLulus] = useState('');
    const [sklhAsal, setSklhAsal] = useState('');
    const [nama, setnama] = useState('');
    const [gender, setGender] = useState('');
    const [nisn, setNisn] = useState('');
    const [tmpLahir, setTmpLahir] = useState('');
    const [tglLahir, setTglLahir] = useState('');
    const [agama, setAgama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [noHp, setNoHp] = useState('');
    const router = useRouter()
  
    const submitDataPendaftar = async (e) => {
      e.preventDefault()
      await axios.post('https://ppdb-data.herokuapp.com//data',{
        JalurPendaftaran: jalur,  
        TanggalDaftar: tglDftr,
        Keahlian: keahlian,
        JenisSekolah: jenisSklh,
        StatusSekolah: statusSklh,
        TahunLulus: thnLulus,
        SekolahAsal: sklhAsal,
        NamaLengkap: nama,
        JenisKleamin: gender,
        NISN: nisn,
        TempatLahir: tmpLahir,
        TanggalLahir: tglLahir,
        Agama: agama,
        Alamat: alamat,
        NoHp: noHp
      });
      router.push('/')
    }
    return (
        <>
            <Layout>
                <div className="my-5">
                    <div className="text-center flex flex-col gap-5">
                        <div className="text-3xl font-semibold">
                            <h1>Formulir PPDB 2022</h1>
                            <span>Massachusetts Institute of Technology</span>
                        </div>
                        <div className="text-xl">
                            <h1>Isi Data dengan Lengkap</h1>
                            <span className="font-bold">(<span className="text-red-500">*</span>) Wajib Diisi</span>
                        </div>
                    </div>
                    <div className="mx-32 shadow-xl">
                        <div className="p-5">
                        <form onSubmit={submitDataPendaftar}>
                            <div className="border-b-2 py-3 flex flex-row justify-between">
                                <div className="text-3xl">
                                    <span>Registration</span>
                                </div>
                                <div className="text-xl flex items-center">
                                    <select value={jalur} onChange={(e) => setJalur(e.target.value)}>
                                        <option>Pilih Jalur</option>
                                        <option>Reguler</option>
                                        <option>Afirmasi</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 text-lg">
                                <div className="grid grid-cols-4">
                                    <div className="flex flex-col gap-1">
                                        <span>Tanggal Daftar <span className="text-red-500">*</span></span>
                                        <input type="date"  value={tglDftr} onChange={(e) => setTglDftr(e.target.value)} className="border w-10/12 focus:outline-none hover:border-sky-500" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>Komp. Keahlian <span className="text-red-500">*</span></span>
                                        <select value={keahlian} onChange={(e) => setKeahlian(e.target.value)} className="border w-10/12 focus:outline-none hover:border-sky-500">
                                            <option>Pilih Keahlian</option>
                                            <option>TKJ</option>
                                            <option>RPL</option>
                                            <option>MM</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>Jenis Sekolah <span className="text-red-500">*</span></span>
                                        <select value={jenisSklh} onChange={(e) => setJenisSklh(e.target.value)} className="border w-10/12 focus:outline-none hover:border-sky-500">
                                            <option>Pilih Kategori</option>
                                            <option>SMP</option>
                                            <option>MTS</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>Status Sekolah <span className="text-red-500">*</span></span>
                                        <select value={statusSklh} onChange={(e) => setStatusSklh(e.target.value)} className="border w-12/12 focus:outline-none hover:border-sky-500">
                                            <option>Pilih Kategori</option>
                                            <option>Negeri</option>
                                            <option>Swasta</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col gap-1">
                                        <span>Tahun Lulus <span className="text-red-500">*</span></span>
                                        <select value={thnLulus} onChange={(e) => setThnLulus(e.target.value)} className="border w-10/12 focus:outline-none hover:border-sky-500">
                                            <option>Pilih Tahun</option>
                                            <option>2024</option>
                                            <option>2023</option>
                                            <option>2022</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>Sekolah Asal <span className="text-red-500">*</span></span>
                                        <input type="text" value={sklhAsal} onChange={(e) => setSklhAsal(e.target.value)} className="border w-12/12 focus:outline-none hover:border-sky-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-3xl border-b-2 py-3">
                                <span>Personal Data</span>
                            </div>
                            <div className="flex flex-col gap-1 text-lg">
                                <div className="grid grid-cols-3">
                                    <div className="flex flex-col gap-1">
                                        <span>Nama Lengkap <span className="text-red-500">*</span></span>
                                        <input type="text" value={nama} onChange={(e) => setnama(e.target.value)} className="border w-10/12 focus:outline-none hover:border-sky-500" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>Jenis Kelamin <span className="text-red-500">*</span></span>
                                        <select value={gender} onChange={(e) => setGender(e.target.value)} className="border w-10/12 focus:outline-none hover:border-sky-500">
                                            <option>Pilih Kelamin</option>
                                            <option>Laki-Laki</option>
                                            <option>Perempuan</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>NISN <span className="text-red-500">*</span></span>
                                        <input type="text" value={nisn} onChange={(e) => setNisn(e.target.value)} className="border w-12/12 focus:outline-none hover:border-sky-500" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div className="flex flex-col gap-1">
                                        <span>Tempat Lahir <span className="text-red-500">*</span></span>
                                        <input type="text" value={tmpLahir} onChange={(e) => setTmpLahir(e.target.value)} className="border w-10/12 focus:outline-none hover:border-sky-500" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>Tanggal Lahir <span className="text-red-500">*</span></span>
                                        <input type="date" value={tglLahir} onChange={(e) => setTglLahir(e.target.value)} className="border w-10/12 focus:outline-none hover:border-sky-500" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>Agama <span className="text-red-500">*</span></span>
                                        <select value={agama} onChange={(e) => setAgama(e.target.value)} className="border w-12/12 focus:outline-none hover:border-sky-500">
                                            <option>Pilih Agama</option>
                                            <option>Islam</option>
                                            <option>Kristen/Katholik</option>
                                            <option>Hindu</option>
                                            <option>Budha</option>
                                            <option>Lainnya</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex flex-col gap-1">
                                        <span>Alamat <span className="text-red-500">*</span></span>
                                        <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} className="border w-10/12 focus:outline-none hover:border-sky-500" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span>No. HP / WA <span className="text-red-500">*</span></span>
                                        <input type="text" value={noHp} onChange={(e) => setNoHp(e.target.value)} className="border w-12/12 focus:outline-none hover:border-sky-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-right my-7">
                                <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-700">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Daftar;