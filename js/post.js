posts =
[
  {
    des: 'JADUAL PENTAKSIRAN SUMATIF PERTENGAHAN SESI AKADEMIK 2023/2024',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2022/07/download.jpg'
  },
  {
    des: 'Maklumat Cuti Hari Raya Korban',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2022/06/36-bagaimana-pengaturan-cuti-bagi.jpg'
  },
  {
    des: 'JADUAL PENTAKSIRAN SUMATIF PERTENGAHAN SESI AKADEMIK 2023/2024',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2022/07/download.jpg'
  },
  {
    des: 'Maklumat Cuti Hari Raya Korban',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2022/06/36-bagaimana-pengaturan-cuti-bagi.jpg'
  },
  {
    des: 'JADUAL PENTAKSIRAN SUMATIF PERTENGAHAN SESI AKADEMIK 2023/2024',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2022/07/download.jpg'
  },
  {
    des: 'Maklumat Cuti Hari Raya Korban',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2022/06/36-bagaimana-pengaturan-cuti-bagi-300x225.jpg'
  },
  {
    des: 'JADUAL PENTAKSIRAN SUMATIF PERTENGAHAN SESI AKADEMIK 2023/2024',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2022/07/download.jpg'
  },
  {
    des: 'MAKLUMAT CUTI PENGGAL 1 SESI 2023/2024',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2022/06/36-bagaimana-pengaturan-cuti-bagi-300x225.jpg'
  },
  {
    des: 'CUTI PERAYAAN AIDILFITRI & CUTI PERTENGAHAN PENGGAL 1 SESI 23/24',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2022/04/1000_F_427810683_qXDxAdidZCNPpeUYk854YMp6UIhTFU9v-300x300.jpg'
  },
  {
    des: 'MAKLUMAT WAKTU PERSEKOLAHAN SEPANJANG BULAN RAMADHAN',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2023/03/New-Ramadan-2023-Mubarak-Wishes-Images-Messages-and-Whatsapp-Status-300x300.jpg'
  },
  {
    des: 'PROGRAM ORIENTASI MURID PERALIHAN/ TINGKATAN 1 TAHUN 2023',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2023/02/istockphoto-1223088904-612x612-1-300x180.jpg'
  },
  {
    des: 'PENGESAHAN PENEMPATAN MURID PERALIHAN/TINGKATAN 1',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2023/02/istockphoto-1223088904-612x612-1-300x180.jpg'
  },
  {
    des: '(Dream Catcher) MAJLIS GRADUASI PELAJAR TINGKATAN 5 SESI AKADEMIK 2022/23 《筑梦》尊孔中五毕业典礼 2022/23',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2023/02/photo_2023-01-13_09-58-27-300x150.jpg'
  },
  {
    des: 'Maklumat Cuti Bergilir sempena SPM 2022 dan Cuti Akhir Penggal 3 Tahun 2022/2023',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2021/02/Spm-1-300x169.jpg'
  },
  {
    des: 'Maklumat Cuti Perayaan dan Cuti Peristiwa Tahun Baru Cina 2023',
    image: 'https://klconfucian.edu.my/wp-content/uploads/2023/01/pngtree-chinese-new-year-rabbit-chinese-new-year-2023-festival-happy-new-picture-image_1919231-300x214.png'
  }
]

for (i=6;i<posts.length;i++){
  post_frame = document.createElement("div")
  post_frame.id = "post"

  post_frame.style.background = `url(${posts[i]["image"]})`
  post_frame.style.backgroundPosition = "center";
  post_frame.style.backgroundRepeat = "no-repeat"

  post_des = document.createElement("label")
  post_des.id = "post-des"
  post_des.innerText = posts[i]["des"]

  post_frame.appendChild(post_des)
  post_frame.style.opacity = "0"
  post_frame.style.animationDelay = `${(i-6)*.1}s`

  content_frame = document.getElementById("post-frame");
  content_frame.appendChild(post_frame);
}
