const Kabupaten = [
   'Kab. Aceh Barat',
   'Kab. Aceh Barat Daya',
   'Kab. Aceh Besar',
   'Kab. Aceh Jaya',
   'Kab. Aceh Selatan',
   'Kab. Aceh Singkil',
   'Kab. Aceh Tamiang',
   'Kab. Aceh Tengah',
   'Kab. Aceh Tenggara',
   'Kab. Aceh Timur',
   'Kab. Aceh Utara',
   'Kab. Bener Meriah',
   'Kab. Bireuen',
   'Kab. Gayo Lues',
   'Kab. Nagan Raya',
   'Kab. Pidie',
   'Kab. Pidie Jaya',
   'Kab. Simeulue',
   'Kota Banda Aceh',
   'Kota Langsa',
   'Kota Lhokseumawe',
   'Kota Sabang',
   'Kota Subulussalam',
   'Kab. Badung',
   'Kab. Bangil',
   'Kab. Buleleng',
   'Kab. Gianyar',
   'Kab. Jembrana',
   'Kab. Karangasem',
   'Kab. Klungkung',
   'Kab. Tabanan',
   'Kota Denpasar',
   'Kab. Lebak',
   'Kab. Pandeglang',
   'Kab. Serang',
   'Kab. Tangerang',
   'Kota Cilegon',
   'Kota Serang',
   'Kota Tangerang',
   'Kota Tangerang selatan',
   'Kab. Bengkulu Selatan',
   'Kab. Bemgkulu Tengah',
   'Kab. Bengkulu Utara',
   'Kab. Kaur',
   'Kab. kapahiang',
   'Kab. Lebong',
   'Kab. Mukomuko',
   'Kab. Rejang Lebong',
   'Kab. seluma',
   'Kota Bengkulu',
   'Kab. Bantul',
   'Kab. Gunung kildul',
   'Kab. Kulon Progo',
   'Kab. Sleman',
   'Kota Yogyakarta',
   'Kab. Kepulauan Seribu',
   'Kota Jakarta Barat',
   'Kota Jakarta Pusat',
   'Kota Jakarta Selatan',
   'Kota Jakarta Timur',
   'Kota Jakarta Utara',
   'Kab. Boalemo',
   'Kab. Bone Bolango',
   'Kab. Gorontalo',
   'Kab. gorontalo Utara',
   'Kab. Pahuwato',
   'Kota Gorontalo',
   'Kab. Batanghari',
   'Kab. Bungo',
   'Kab. Kerinci',
   'Kab. Merangin',
   'Kab. Muaro Jambi',
   'Kab. Sarolangun',
   'Kab. Tanjung Jabung Barat',
   'Kab. Tanjung Jabung Timur',
   'Kab. Tebo',
   'Kota Jambi',
   'Kota Sungai Penuh',
   'Kab. Bandung',
   'Kab. Bandung Barat',
   'Kab. Bekasi',
   'Kab. Bogor',
   'Kab. Ciamis',
   'Kab. Cianjur',
   'Kab. Cirebon',
   'Kab. Garut',
   'Kab. Indramayu',
   'Kab. Karawang',
   'Kab. Kuningan',
   'Kab. Majalengka',
   'Kab. Pangandaran',
   'Kab. Purwakarta',
   'Kab. Subang',
   'Kab. Sukabumi',
   'Kab. Sumedang',
   'Kab. Tasikmalaya',
   'Kota Bandung',
   'Kota Banjar',
   'Kota Bekasi',
   'Kota Bogor',
   'Kota Cimahi',
   'Kota Cirebon',
   'Kota Depok',
   'Kota Sukabumi',
   'Kota Tasikmalaya',
   'Kab. Banjarnegara',
   'Kab. Banyumas',
   'Kab. Batang',
   'Kab. Blora',
   'Kab. Boyolali',
   'Kab. Brebes',
   'Kab. Cilacap',
   'Kab. Demak',
   'Kab. Grobogan',
   'Kab. Jepara',
   'Kab. Karanganyar',
   'Kab. Kebumen',
   'Kab. Kendal',
   'Kab. Klaten',
   'Kab. Kudus',
   'Kab. Magelang',
   'Kab. Pati',
   'Kab. Pekalongan',
   'Kab. Pemalang',
   'Kab. Purbalingga',
   'Kab. Purworejo',
   'Kab. Rembang',
   'Kab. Semarang',
   'Kab. Sragen',
   'Kab. Sukoharjo',
   'Kab. Tegal',
   'Kab. Temanggung',
   'Kab. Wonogiri',
   'Kab. Wonosobo',
   'Kota Magelang',
   'Kota Pekalongan',
   'Kota Salatiga',
   'Kota Semarang',
   'Kota Surakarta',
   'Kota Tegal',
   'Kab. Bangkalan',
   'Kab. Banyuwangi',
   'Kab. Blitar',
   'Kab. Bojonegoro',
   'Kab. Bondowoso',
   'Kab. Gresik',
   'Kab. Jember',
   'Kab. Jombang',
   'Kab. Kediri',
   'Kab. Lamongan',
   'Kab. Lumajang',
   'Kab. Madiun',
   'Kab. Magetan',
   'Kab. Malang',
   'Kab. Mojokerto',
   'Kab. Nganjuk',
   'Kab. Ngawi',
   'Kab. Pacitan',
   'Kab. Pamekasan',
   'Kab. Pasuruan',
   'Kab. Ponorogo',
   'Kab. Probolinggo',
   'Kab. Sampang',
   'Kab. Sidoarjo',
   'Kab. Situbondo',
   'Kab. Sumenep',
   'Kab. Trenggalek',
   'Kab. Tuban',
   'Kab. Tulungagung',
   'Kota Batu',
   'Kota Blitar',
   'Kota Kediri',
   'Kota Madiun',
   'Kota Malang',
   'Kota Mojokerto',
   'Kota Pasuruan',
   'Kota Probolinggo',
   'Kota Surabaya',
   'Kab. Bengkayang',
   'Kab. Kapuas Hulu',
   'Kab. Kayong Utara',
   'Kab. Ketapang',
   'Kab. Kubu Raya',
   'Kab. Landak',
   'Kab. Melawi',
   'Kab. Pontianak',
   'Kab. Sambas',
   'Kab. Sanggau',
   'Kab. Sekadau',
   'Kab. Sintang',
   'Kota Pontianak',
   'Kota Singkawang',
   'Kab. Balangan',
   'Kab. Banjar',
   'Kab. Barito Kuala',
   'Kab. Hulu Sungai Selatan',
   'Kab. Hulu Sungai Tengah',
   'Kab. Hulu Sungai Utara',
   'Kab. Kotabaru',
   'Kab. Tabalong',
   'Kab. Tanah Bumbu',
   'Kab. Tanah Laut',
   'Kab. Tapin',
   'Kota Banjarbaru',
   'Kota Banjarmasin',
   'Kab. Barito Selatan',
   'Kab. Barito Timur',
   'Kab. Barito Utara',
   'Kab. Gunung Mas',
   'Kab. Kapuas',
   'Kab. Katingan',
   'Kab. Kotawaringin Barat',
   'Kab. Kotawaringin Timur',
   'Kab. Lamandau',
   'Kab. Murung Raya',
   'Kab. Pulang Pisau',
   'Kab. Sukamara',
   'Kab. Seruyan',
   'Kota Palangka Raya',
   'Kab. Berau',
   'Kab. Kutai Barat',
   'Kab. Kutai Kartanegara',
   'Kab. Kutai Timur',
   'Kab. Paser',
   'Kab. Penajam Paser Utara',
   'Kab. Mahakam Ulu',
   'Kota Balikpapan',
   'Kota Bontang',
   'Kota Samarinda',
   'Kab. Bulungan',
   'Kab. Malinau',
   'Kab. Nunukan',
   'Kab. Tana Tidung',
   'Kota Tarakan',
   'Kab. Bangka',
   'Kab. Bangka Barat',
   'Kab. Bangka Selatan',
   'Kab. Bangka Tengah',
   'Kab. Belitung',
   'Kab. Belitung Timur',
   'Kota Pangkal Pinang',
   'Kab. Bintan',
   'Kab. Karimun',
   'Kab. Kepulauan Anambas',
   'Kab. Lingga',
   'Kab. Natuna',
   'Kota Batam',
   'Kota Tanjung Pinang',
   'Kab. Lampung Barat',
   'Kab. Lampung Selatan',
   'Kab. Lampung Tengah',
   'Kab. Lampung Timur',
   'Kab. Lampung Utara',
   'Kab. Mesuji',
   'Kab. Pesawaran',
   'Kab. Pringsewu',
   'Kab. Tanggamus',
   'Kab. Tulang Bawang',
   'Kab. Tulang Bawang Barat',
   'Kab. Way Kanan',
   'Kab. Pesisir Barat',
   'Kota Bandar Lampung',
   'Kota Kotabumi',
   'Kota Liwa',
   'Kota Metro',
   'Kab. Buru',
   'Kab. Buru Selatan',
   'Kab. Kepulauan Aru',
   'Kab. Maluku Barat Daya',
   'Kab. Maluku Tengah',
   'Kab. Maluku Tenggara',
   'Kab. Maluku Tenggara Barat',
   'Kab. Seram Bagian Barat',
   'Kab. Seram Bagian Timur',
   'Kota Ambon',
   'Kota Tual',
   'Kab. Halmahera Barat',
   'Kab. Halmahera Tengah',
   'Kab. Halmahera Utara',
   'Kab. Halmahera Selatan',
   'Kab. Halmahera Timur',
   'Kab. Kepulauan Sula',
   'Kab. Pulau Morotai',
   'Kab. Pulau Taliabu',
   'Kota Ternate',
   'Kota Tidore Kepulauan',
   'Kab. Bima',
   'Kab. Dompu',
   'Kab. Lombok Barat',
   'Kab. Lombok Tengah',
   'Kab. Lombok Timur',
   'Kab. Lombok Utara',
   'Kab. Sumbawa',
   'Kab. Sumbawa Barat',
   'Kota Bima',
   'Kota Mataram',
   'Kab. Alor',
   'Kab. Belu',
   'Kab. Ende',
   'Kab. Flores Timur',
   'Kab. Kupang',
   'Kab. Lembata',
   'Kab. Manggarai',
   'Kab. Manggarai Barat',
   'Kab. Manggarai Timur',
   'Kab. Ngada',
   'Kab. Nagekeo',
   'Kab. Rote Ndao',
   'Kab. Sabu Raijua',
   'Kab. Sikka',
   'Kab. Sumba Barat',
   'Kab. Sumba Barat Daya',
   'Kab. Sumba Tengah',
   'Kab. Sumba Timur',
   'Kab. Timor Tengah Selatan',
   'Kab. Timor Tengah Utara',
   'Kota Kupang',
   'Kab. Asmat',
   'Kab. Biak Numfor',
   'Kab. Boven Digoel',
   'Kab. Deiyai',
   'Kab. Dogiyai',
   'Kab. Intan Jaya',
   'Kab. Jayapura',
   'Kab. Jayawijaya',
   'Kab. Keerom',
   'Kab. Kepulauan Yapen',
   'Kab. Lanny Jaya',
   'Kab. Mamberamo Raya',
   'Kab. Mamberamo Tengah',
   'Kab. Mappi',
   'Kab. Merauke',
   'Kab. Mimika',
   'Kab. Nabire',
   'Kab. Nduga',
   'Kab. Paniai',
   'Kab. Pegunungan Bintang',
   'Kab. Puncak',
   'Kab. Puncak Jaya',
   'Kab. Sarmi',
   'Kab. Supiori',
   'Kab. Tolikara',
   'Kab. Waropen',
   'Kab. Yahukimo',
   'Kab. Yalimo',
   'Kota Jayapura',
   'Kab. Fakfak',
   'Kab. Kaimana',
   'Kab. Manokwari',
   'Kab. Manokwari Selatan',
   'Kab. Maybrat',
   'Kab. Pegunungan Arfak',
   'Kab. Raja Ampat',
   'Kab. Sorong',
   'Kab. Sorong Selatan',
   'Kab. Tambrauw',
   'Kab. Teluk Bintuni',
   'Kab. Teluk Wondama',
   'Kota Sorong',
   'Kab. Bengkalis',
   'Kab. Indragiri Hilir',
   'Kab. Indragiri Hulu',
   'Kab. Kampar',
   'Kab. Kuantan Singingi',
   'Kab. Pelalawan',
   'Kab. Rokan Hilir',
   'Kab. Rokan Hulu',
   'Kab. Siak',
   'Kab. Kepulauan Meranti',
   'Kota Dumai',
   'Kota Pekanbaru',
   'Kab. Majene',
   'Kab. Mamasa',
   'Kab. Mamuju',
   'Kab. Mamuju Utara',
   'Kab. Polewali Mandar',
   'Kab. Mamuju Tengah',
   'Kab. Bantaeng',
   'Kab. Barru',
   'Kab. Bone	Watampone',
   'Kab. Bulukumba',
   'Kab. Enrekang',
   'Kab. Gowa',
   'Kab. Jeneponto',
   'Kab. Kepulauan Selayar',
   'Kab. Luwu',
   'Kab. Luwu Timur',
   'Kab. Luwu Utara',
   'Kab. Maros',
   'Kab. Pangkajene dan Kepulauan',
   'Kab. Pinrang',
   'Kab. Sidenreng Rappang',
   'Kab. Sinjai',
   'Kab. Soppeng',
   'Kab. Takalar',
   'Kab. Tana Toraja',
   'Kab. Toraja Utara',
   'Kab. Wajo',
   'Kota Makassar',
   'Kota Palopo',
   'Kota Parepare',
   'Kab. Banggai',
   'Kab. Banggai Kepulauan',
   'Kab. Banggai Laut',
   'Kab. Buol',
   'Kab. Donggala',
   'Kab. Morowali',
   'Kab. Parigi Moutong',
   'Kab. Poso',
   'Kab. Sigi',
   'Kab. Tojo Una-Una',
   'Kab. Tolitoli',
   'Kota Palu',
   'Kab. Bombana',
   'Kab. Buton',
   'Kab. Buton Utara',
   'Kab. Kolaka',
   'Kab. Kolaka Timur',
   'Kab. Kolaka Utara',
   'Kab. Konawe',
   'Kab. Konawe Selatan',
   'Kab. Konawe Utara',
   'Kab. Konawe Kepulauan',
   'Kab. Muna',
   'Kab. Wakatobi',
   'Kota Bau-Bau',
   'Kota Kendari',
   'Kab. Bolaang Mongondow',
   'Kab. Bolaang Mongondow Selatan',
   'Kab. Bolaang Mongondow Timur',
   'Kab. Bolaang Mongondow Utara',
   'Kab. Kepulauan Sangihe',
   'Kab. Kepulauan Siau Tagulandang Biaro',
   'Kab. Kepulauan Talaud',
   'Kab. Minahasa',
   'Kab. Minahasa Selatan',
   'Kab. Minahasa Tenggara',
   'Kab. Minahasa Utara',
   'Kota Bitung',
   'Kota Kotamobagu',
   'Kota Manado',
   'Kota Tomohon',
   'Kab. Agam',
   'Kab. Dharmasraya',
   'Kab. Kepulauan Mentawai',
   'Kab. Lima Puluh Kota',
   'Kab. Padang Pariaman',
   'Kab. Pasaman',
   'Kab. Pasaman Barat',
   'Kab. Pesisir Selatan',
   'Kab. Sijunjung',
   'Kab. Solok',
   'Kab. Solok Selatan',
   'Kab. Tanah Datar',
   'Kota Bukittinggi',
   'Kota Padang',
   'Kota Padangpanjang',
   'Kota Pariaman',
   'Kota Payakumbuh',
   'Kota Sawahlunto',
   'Kota Solok',
   'Kab. Banyuasin',
   'Kab. Empat Lawang',
   'Kab. Lahat',
   'Kab. Muara Enim',
   'Kab. Musi Banyuasin',
   'Kab. Musi Rawas',
   'Kab. Ogan Ilir',
   'Kab. Ogan Komering Ilir',
   'Kab. Ogan Komering Ulu',
   'Kab. Ogan Komering Ulu Selatan',
   'Kab. Penukal Abab Lematang Ilir',
   'Kab. Ogan Komering Ulu Timur',
   'Kota Lubuklinggau',
   'Kota Pagar Alam',
   'Kota Palembang',
   'Kota Prabumulih',
   'Kab. Asahan',
   'Kab. Batubara',
   'Kab. Dairi',
   'Kab. Deli Serdang',
   'Kab. Humbang Hasundutan',
   'Kab. Karo	Kabanjahe',
   'Kab. Labuhanbatu',
   'Kab. Labuhanbatu Selatan',
   'Kab. Labuhanbatu Utara',
   'Kab. Langkat',
   'Kab. Mandailing Natal',
   'Kab. Nias',
   'Kab. Nias Barat',
   'Kab. Nias Selatan',
   'Kab. Nias Utara',
   'Kab. Padang Lawas',
   'Kab. Padang Lawas Utara',
   'Kab. Pakpak Bharat',
   'Kab. Samosir',
   'Kab. Serdang Bedagai',
   'Kab. Simalungun',
   'Kab. Tapanuli Selatan',
   'Kab. Tapanuli Tengah',
   'Kab. Tapanuli Utara',
   'Kab. Toba Samosir',
   'Kota Binjai',
   'Kota Gunungsitoli',
   'Kota Medan',
   'Kota Padangsidempuan',
   'Kota Pematangsiantar',
   'Kota Sibolga',
   'Kota Tanjungbalai',
   'Kota Tebing Tinggi',
]

export default Kabupaten