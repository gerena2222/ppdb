import Layout from "./components/layout";

const Profil = () => {
    return ( 
        <>
        <Layout>
            <div  className="p-5">
                <div className="flex flex-row gap-3">
                    <div className="w-1/2">
                        <img src="/image/kampus.jpeg" className="rounded-xl shadow-xl" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-2">
                        <span><span className="font-bold">Institut Teknologi Massachusetts</span> (Massachusetts Institute of Technology atau MIT), adalah institusi riset swasta dan universitas yang terletak di kota Cambridge, Massachusetts tepat di seberang Sungai Charles dari distrik Back Bay di Boston, Amerika Serikat. MIT memiliki 5 sekolah dan satu kolese, mencakup 32 departemen yang mengkhususkan diri pada sains dan penelitian teknologi.</span>
                        <span>Didirikan tahun 1861 sebagai respon atas kemajuan teknologi dan industri di Amerika pada saat itu, universitas ini mengadopsi universitas riset ala Eropa. MIT sekarang berdiri di atas tanah seluas 168 are yang dibuka 1916. Dalam kurun waktu 60 tahun belakangan ini, MIT telah mengembangkan cabang lain seperti manajemen, ekonomi, ilmu politik, dan biologi.</span>
                        <span>Departemen dan sekolah yang paling terkenal adalah Lincoln Laboratory, Computer Science and Artificial Intelligence Laboratory, Media Lab, Whitehead Institute dan Sloan School of Management. 59 dari anggota dari komunitas MIT telah memenangkan Penghargaan Nobel.</span>
                    </div>
                </div>
            </div>
        </Layout>
        </>
     );
}
 
export default Profil;