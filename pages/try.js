import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className="shadow-xl bg-[url('/image/banner-ppdb.png')] bg-contain bg-center bg-no-repeat h-screen">
                <div className='text-center pt-80'>
                    <button className='p-3 bg-black text-white rounded-3xl'>
                        <Link href="" className=''>Daftar Sekarang</Link>
                    </button>
                </div>
            </div>
            <div className='mx-32 my-10'>
                <div>
                    <div className='flex justify-between border-b border-black p-1 items-center'>
                        <div>
                            <span className='uppercase text-xl font-semibold text-sky-500'>Tata cara pendaftaran</span>
                        </div>
                        <button className='rounded-full hover:bg-gray-300 p-3' data-target="#dropdown" id="navigation">
                            <i className="fas fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className='hidden' id='dropdown'>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <span>1. Calon Siswa mengisi formulir data awal Penerimaan Peserta Didik Baru dengan meng-klik link <a href="" className="text-blue-500 underline">daftar sekarang</a>.</span>
                            <span>2. Isi dengan lengkap formulir dengan data yang benar dan dapat dipertanggung jawabkan.</span>
                            <span>3. Pastikan status Progress Pengisian Formulir telah selesai dan klik kirim.</span>
                            <span>4. Periksa email yang didaftarkan pada form, periksa kotak masuk, cek Formulir Penerimaan Peserta Didik Baru Tahun Ajaran 2021/2022</span>
                            <span>5. Silakan download formulir yang ada di kotak masuk, simpan kemudian print (jika mengalami kesulitan, bisa minta bantuan panitia PPDB saat verifikasi di MIT)</span>
                            <span>6. Silakan datang ke MIT antara tanggal 14 - 19 JUNI 2021, dengan membawa Formulir Penerimaan Peserta Didik Baru dan berkas persyaratan, untuk melakukan verifikasi berkas dan penerimaan token</span>
                            <span>7. Informasi selanjutnya akan disampaikan melalui website ini pada menu Pengumuman. Silahkan buka update terbaru tiap hari</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between border-b border-black p-1 items-center'>
                        <div>
                            <span className='uppercase text-xl font-semibold text-sky-500'>Syarat pendaftaran</span>
                        </div>
                        <button className='rounded-full hover:bg-gray-300 p-3' data-target="#dropdown-2" id="navigation-2">
                            <i className="fas fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className='hidden' id='dropdown-2'>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <span>1. Surat Keterangan Nilai Rapot (Asli).</span>
                            <span>2. Fotocopy Kartu Keluarga (KK) dan membawa yang asli.</span>
                            <span>3. Foto Copy Akta Kelahiran.</span>
                            <span>4. Foto KIP bagi yang memiliki.</span>
                            <span>5. Piagam Penghargaan bagi yang memiliki (Asli).</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between border-b border-black p-1 items-center'>
                        <div>
                            <span className='uppercase text-xl font-semibold text-sky-500'>jadwal ppdb</span>
                        </div>
                        <button className='rounded-full hover:bg-gray-300 p-3' data-target="#dropdown-3" id="navigation-3">
                            <i className="fas fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className='hidden' id='dropdown-3'>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <div className='flex flex-row gap-5 items-center'>
                                <i className="fas fa-square-full fa-xs"></i>
                                <span className='font-bold uppercase text-xl'>Penetapan Zonasi</span>
                            </div>
                            <span className='mx-8 uppercase text-lg font-semibold text-gray-500'>21 Mei 2022</span>
                        </div>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <div className='flex flex-row gap-5 items-center'>
                                <i className="fas fa-square-full fa-xs"></i>
                                <span className='font-bold uppercase text-xl'>Publikasi ppbd</span>
                            </div>
                            <span className='mx-8 uppercase text-lg font-semibold text-gray-500'>21 Mei 2022 - 16 juni 2022</span>
                        </div>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <div className='flex flex-row gap-5 items-center'>
                                <i className="fas fa-square-full fa-xs"></i>
                                <span className='font-bold uppercase text-xl'>verifikasi berkas pendaftar dan penerimaan token</span>
                            </div>
                            <span className='mx-8 uppercase text-lg font-semibold text-gray-500'>14 - 19 juni 2022</span>
                        </div>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <div className='flex flex-row gap-5 items-center'>
                                <i className="fas fa-square-full fa-xs"></i>
                                <span className='font-bold uppercase text-xl'>pendaftaran</span>
                            </div>
                            <span className='mx-8 uppercase text-lg font-semibold text-gray-500'>dibuka : 21 juni 2022 (07.00 Wib)</span>
                            <span className='mx-8 uppercase text-lg font-semibold text-gray-500'>ditutup : 24 juni 2022 (16.00 Wib)</span>
                        </div>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <div className='flex flex-row gap-5 items-center'>
                                <i className="fas fa-square-full fa-xs"></i>
                                <span className='font-bold uppercase text-xl'>evaluasi, pemeringkatan, dan penyaluran</span>
                            </div>
                            <span className='mx-8 uppercase text-lg font-semibold text-gray-500'>25 juni - 26 juni 2022</span>
                        </div>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <div className='flex flex-row gap-5 items-center'>
                                <i className="fas fa-square-full fa-xs"></i>
                                <span className='font-bold uppercase text-xl'>Pengumuman hasil seleksi</span>
                            </div>
                            <span className='mx-8 uppercase text-lg font-semibold text-gray-500'>26 juni 2022 (23.55 wib)</span>
                        </div>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <div className='flex flex-row gap-5 items-center'>
                                <i className="fas fa-square-full fa-xs"></i>
                                <span className='font-bold uppercase text-xl'>Daftar ulang</span>
                            </div>
                            <span className='mx-8 uppercase text-lg font-semibold text-gray-500'>28 juni - 2 juli 2022</span>
                        </div>
                        <div className='flex flex-col mx-4 my-2 gap-2 text-sm'>
                            <div className='flex flex-row gap-5 items-center'>
                                <i className="fas fa-square-full fa-xs"></i>
                                <span className='font-bold uppercase text-xl'>awal tahun ajaran baru 2022/2023</span>
                            </div>
                            <span className='mx-8 uppercase text-lg font-semibold text-gray-500'>12 juli 2022</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    );
}

export default Navbar;