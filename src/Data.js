// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: 'Dell Alienware M15 R2',
    category: 'Computer',
    price: 79990,
    description:
      'โน้ตบุ๊คเล่นเกมรุ่นแรกที่เราขอแนะนำก็คือ Dell Alienware M15 R2 ที่สุดของของเกมมิ่งโน้ตบุ๊กที่มากับสเปกและดีไซน์ระดับไฮเอนด์ ออกแบบมาใหม่ทั้งฮาร์ดแวร์และซอฟแวร์เพื่อเอาใจคอเกมตัวจริง มาพร้อมขุมพลัง Intel core i เจนเนอรเรชั่นที่ 9 และการ์ดจอ NVIDIA RTX 20 Series และฟีเจอร์ที่อัดแน่นเครื่อง',
    popular: true,
    imageUrls: [
      'https://notebookspec.com/nbs/upload_notebook/20191126-142359_c.jpg'
    ]
  },
  {
    id: 2,
    name: 'Acer Swift SF3',
    category: 'Computer',
    price: 22900,
    description:
      ' Acer Swift SF314-57-32PH ซีพียู Core i3-1005G1 การ์ดจอ Intel UHD Graphics แรม 4GB ถือว่าปกติตามกลุ่มราคานี้ หน้าจอ 14 นิ้ว FHD IPS แต่จุดที่เหนือกว่ารุ่นอื่น ๆ คือมีเซ็นเซอร์สแกนลายนิ้วมือและรองรับ Wi-FI 6 แน่นอนมี USB-C มาให้ 1 พอร์ท นำหนักก็ค่อนข้างเบาแค่ 1.19 กก. เท่านั้น',

    popular: true,
    imageUrls: [
      'https://notebookspec.com/nbs/upload_notebook/20191008-194533_c.jpg'
    ]
  },
  {
    id: 3,
    name: 'ASUS Vivobook S14',
    category: 'Computer',
    price: 24990,
    description:
      'Vivobook รุ่นใหม่ที่เพิ่งเปิดตัวปลายปีที่แล้วที่ใช้ Intel Core 10th Gen ยังไม่เข้าไทย ซีพียูรุ่นเลยยังอยู่ที่ 8th Gen รุ่นที่แนะนำคือ S14 S431FL ซีพียู Core i7-8565U แรม 8GB การ์ดจอ GeForce MX250 หน้าจอ 14 นิ้ว FHD',
    popular: true,
    imageUrls: [
      'https://www.jib.co.th/img_master/product/original/2019082112054334839_1.jpg'
    ]
  },
  {
    id: 4,
    name: 'ThinkPad X1 Extreme Gen 2',
    category: 'Computer',
    price: 48000,
    description:
      'หนึ่งในแล็บท็อปธุรกิจตัวท็อปของ ThinkPad ที่รวมเอาจุดเด่นเรื่องความบางเบาของ X1 เข้ากับสมรรถนะของเครื่องจากซีรีส์ T มาไว้ด้วยกัน แถมพอร์ตรอบตัวเครื่องก็ค่อนข้างครบ',
    popular: true,
    imageUrls: ['https://cp.lnwfile.com/h9du18.png']
  },
  {
    id: 5,
    name: 'Canon EOS G7X mark III',
    category: 'Camera',
    price: 23900,
    description:
      'กล้องตัวนี้จะเป็น “กล้องที่แข็งแรงที่สุด ! (ถึกทนแรงกระแทก)” คิดไม่ผิดหรอก มันคือกล้อง Gopro hero 8 black นั้นเอง ! ด้วยความที่เป็นกล้อง Action Camera ตัวกล้องจะต้องถึกคงทน เรียกได้ว่าเป็นกล้องที่สะเทิ้นน้ำสะเทิ้นบกก็ว่าได้ Gopro hero 8 black ตัวใหม่นี้ยังมีกันสั่นแบบใหม่ที่พัฒนาขึ้นเป็น HyperSmooth 2.0 เป็น HyperSmooth Boost ที่แทบจะไม่ต้องใช้ไม้กันสั่นกันเลยทีเดียว กล้อง Action Camera ตัวจิ๋วพกพาง่ายนี้ ยังลองรับการถ่ายวีดีโอ 4K ได้สูงสุด 60 เฟรมต่อวินาที แถมมุมมองในการถ่ายภาพที่พัฒนาขึ้นเป็น 4 แบบ มี Linear (19-39mm), Narrow (27mm) , SuperView (16mm) ,Wide (16-34mm) คราวนี้ก็เก็บวิวตอนที่ไปท่องเที่ยวถ่าพภาพหรือถ่ายวีดีโอได้ครบไม่ขาดตอนแล้ว !',
    popular: true,
    imageUrls: [
      'https://www.digital2home.com/wp-content/uploads/2019/08/Canon-G7X-mark-III-01.jpg'
    ]
  },

  {
    id: 6,
    name: 'Nikon Z50',
    category: 'Camera',
    price: 42900,
    description:
      'กล้องตัวนี้เป็นกล้อง Mirrorless APS-C ตัวแรกของ Nikon ซึ่งได้เปิดตัวมาเมื่อช่วงกลางปี 2019 โดยเปิดราคามาได้น่าสนใจมาก สำหรับราคา Body เปล่าที่ไม่ถึง 30000 บาท และ มีการใช้เทคโนโลยีรุ่นล่าสุด เรียกได้เลยว่าเป็นน้อง ๆ รุ่นเรือธงอย่าง Nikon Z6 ได้เลย ซึ่งความดีงามของกล้องตัวนี้ถ้ามือใหม่ที่สนใจกล้อง Nikon Z50 สามารถใช้เลนส์เม้าเดียวกันกับกล้องรุ่นพี่ Nikon Z6 / Z7 ได้ด้วยนะ สามารถใช้เลนส์ได้ยาว ๆ เลย ถ้าคิดจะต่อยอดไปเล่นกล้องฟูลเฟรม',
    popular: false,
    imageUrls: [
      'https://img-ha.mthcdn.com/0IgKU5scEGAdZienMpHV5VGz-OE=/tech.mthai.com/app/uploads/2019/10/Nikon-Z50-2.jpg'
    ]
  },
  {
    id: 7,
    name: 'Canon EOS M50',
    category: 'Camera',
    price: 25990,
    description:
      'กล้องตัวนี้เป็นกล้องตัวเล็ก น้ำหนักเบา พกพาสะดวก ใช้เลนส์เม้า EF-M ซึ่งปัจจุบันก็มีเลนส์ออกมารองรับประมาณหน่งแล้ว แถมล่าสุดทางค่ายเลนส์ SIGMA ยังมีผลิตเลนส์เม้านี้ออกมาด้วย ซึ่งเห็นแววการเป็นกล้องปี 2020 ชัดเจนสำหรับกล้องตัวนี้ และยังเป็นกล้องราคาไม่เกิน 30000 บาท ที่นับวันก็จะมีโปรโมชั่นและราคาที่น่าสนใจเรื่อย ๆ',
    popular: true,
    imageUrls: [
      'https://www.ec-mall.com/wp-content/uploads/2018/03/Canon-EOS-M50_1.jpg'
    ]
  },
  {
    id: 8,
    name: 'HUAWEI Mate30 Pro 5G',
    category: 'Telephone',
    price: 29990,
    description:
      'HUAWEI Mate30 Pro 5G สมาร์ทโฟนที่ชูจุดเด่นในเรื่องขอองกล้องหลังที่ร่วมกับพัฒนากับ Leica พร้อมกับดีไซน์ใหม่ แต่สิ่งที่ต้องทำให้รุ่นนี้น่าสนใจมากขึ้นคือการรองรับเครือข่าย 5G ที่เปิดใช้งานในไทยได้นั่นเอง สำหรับใครที่กำลังตามเทคโนโลยีใหม่ๆ ไม่ควรพลาด',
    popular: true,
    imageUrls: [
      'https://img.gkbcdn.com/p/2019-09-23/huawei-mate-30-pro-5g-6-53-inch-8gb-512gb-smartphone-black-1574132761256._w500_.jpg'
    ]
  },
  {
    id: 9,
    name: 'Samsung Galaxy S20 Ultra 5G',
    category: 'Telephone',
    price: 32900,
    description:
      'Galaxy S20 Ultra 5G สมาร์ทโฟน 5G รุ่นแรกของ Samsung ที่เข้ามาวางจำหน่ายในไทย จัดเต็มทุกฟีเจอร์ หน้าจออสวย แรมเยอะ กล้องซูมได้ไกลสูงสุด 100 เท่า และเป็นสมาร์ทโฟนรุ่นแรกที่สามารถถ่ายวิดีโอความละเอียดสูงสุดถึง 8K',
    popular: true,
    imageUrls: [
      'https://www.checkraka.com/uploaded/logo/d7/d7198a3124df196f3cfc2ca9dffcb3f6.jpg'
    ]
  },
  {
    id: 10,
    name: 'OPPO A31',
    category: 'Telephone',
    price: 5999,
    description:
      'OPPO A31 โดดเด่นด้วย ROM 128GB และ RAM 4GB พร้อมให้คุณสนุกไปกับการถ่ายภาพด้วย AI 3 กล้องหลัง ความละเอียด 12MP ที่มาพร้อมเลนส์ macro ช่วยให้คุณถ่ายภาพพอร์ตเทรตได้อย่างสวยงามและเป็นธรรมชาติมากขึ้น',
    popular: false,
    imageUrls: [
      'https://www.iphone-droid.net/spec/wp-content/uploads/2020/02/OPPO-A31-Photo-2.jpg'
    ]
  },
  {
    id: 11,
    name: 'Huawei Y9s',
    category: 'Telephone',
    price: 7990,
    description:
      'จุดเด่นหน้าจอใหญ่มากถึง 6.59 นิ้ว ความละเอียดระดับ FullHD+ ความหนาแน่นต่อพิกเซล 391ppi ตอบโจทย์รับชมคอนเทนต์วิดีโอ หรือการเล่นเกม ทั้งมีกล้องหลังสามเลนส์ความละเอียด 48 ล้านพิกเซล ในส่วนของดีไซน์เป็นแบบ 3 มิติ ให้ความสวยงามมากยิ่งขึ้น นอกจากนี้ด้านข้างตัวเครื่องมีเซ็นเซอร์สแกนลายนิ้วมือ ปลดล็อครวดเร็วในระยะเวลา 0.3 วินาที และตั้งค่าการเปิดแอปพลิเคชั่น หรือเรียกใช้งานเมนูทางลัดด่วนได้เลย',

    popular: false,
    imageUrls: [
      'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y9s/img/pc/huawei-y9s-pc.jpg'
    ]
  },
  {
    id: 12,
    name: 'OPPO F11 Pro',
    category: 'Telephone',
    price: 10990,
    description:
      'OPPO F11 Pro สมาร์ทโฟนรุ่นแรกของปีนี้ที่เน้นหน้าจอใหญ่แบบ Panoramic screen มีกล้องหน้าแบบ Rising Camera ความละเอียด 16 ล้านพิกเซล ยังชูจุดเด่นด้วยกล้องหลังคู่ 48+5 ล้านพิกเซล รูรับแสงกว้าง f/1.79 ทำให้การถ่ายรูป Portrait สวยแม้ในที่แสงน้อย นอกจากนี้ โหมด Ultra Night Mode ก็สวยงามไม่แพ้กัน ส่วนตัวเครื่องออกแบบด้วยการไล่เฉดสี ทำให้มองเห็นแต่ละมุมมีสีต่างกันถึง 3 สีในเครื่องเดียว และอัดแน่นด้วยหน่วยประมวลผล Mediatek Helio P70 Octa Core, RAM 6GB พร้อมใช้งานชาร์จเร็ว VOOC Flash Charge 3.0',

    popular: true,
    imageUrls: [
      'https://media.bnn.in.th/media/01MBOPPOCPH1969AN/01MBOPPOCPH1969AN-n1.jpg'
    ]
  }
]

// List of item categories.
const categories = [
  {
    name: 'All categories',
    icon: 'list'
  },
  {
    name: 'Computer',
    icon: 'computer'
  },
  {
    name: 'Camera',
    icon: 'camera'
  },
  {
    name: 'Telephone',
    icon: 'phone'
  }
]

// Data for rendering menu.
const dataForTheMenu = [
  { name: 'หน้าหลัก', url: '/', icon: 'home', id: 0 },
  {
    name: 'Product categories',
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: 2 + i,
        url: '/?category=' + x.name,
        icon: x.icon
      }
    })
  }
]

export { sampleProducts, categories, dataForTheMenu }
