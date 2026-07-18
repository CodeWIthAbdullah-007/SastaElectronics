const PRODUCTS_DATA = [
    { id: "SE001", name: "Samsung 1.5 Ton Inverter AC", category: "air-conditioners", brand: "Samsung", price: 142999, originalPrice: 165000, image: "https://images.unsplash.com/photo-1631567091196-b8c8a2695b39?w=400&h=400&fit=crop", rating: 4.5, reviews: 128, stock: 15, sku: "AC-SAM-15T", description: "Energy-efficient 1.5 ton inverter AC with advanced cooling technology. Features turbo cooling, eco mode, and smart temperature control. 10-year compressor warranty.", specs: { Capacity: "1.5 Ton", Type: "Split Inverter", EnergyClass: "A++", Cooling: "Turbo Cool", Warranty: "10 Years Compressor" }, badge: "Best Seller" },
    { id: "SE002", name: "Haier 18 Cu.Ft Refrigerator", category: "refrigerators", brand: "Haier", price: 98500, originalPrice: 115000, image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop", rating: 4.3, reviews: 89, stock: 22, sku: "REF-HAI-18", description: "Double door frost-free refrigerator with advanced cooling system. Keeps food fresh for longer with multi-air flow technology.", specs: { Capacity: "18 Cu.Ft", Type: "Double Door", Defrost: "Frost Free", EnergyClass: "A+", Warranty: "5 Years" }, badge: "Sale" },
    { id: "SE003", name: "Dawlance Washing Machine 12kg", category: "washing-machines", brand: "Dawlance", price: 72999, originalPrice: 85000, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop", rating: 4.1, reviews: 67, stock: 18, sku: "WM-DAW-12", description: "Fully automatic front load washing machine with 15 wash programs. Steam wash, quick wash, and child lock features.", specs: { Capacity: "12 kg", Type: "Front Load", Programs: "15 Wash", SpinSpeed: "1400 RPM", Warranty: "3 Years" } },
    { id: "SE004", name: "TCL 55 inch 4K Smart LED TV", category: "televisions", brand: "TCL", price: 89999, originalPrice: 109999, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop", rating: 4.6, reviews: 203, stock: 10, sku: "TV-TCL-55", description: "Ultra HD 4K smart LED TV with Android TV, HDR10, Dolby Audio, and voice control. Built-in Chromecast and thousands of apps.", specs: { Size: "55 inch", Resolution: "4K UHD", SmartTV: "Android TV", HDR: "HDR10", Warranty: "2 Years" }, badge: "Hot" },
    { id: "SE005", name: "Samsung Galaxy A54 5G", category: "mobiles", brand: "Samsung", price: 67999, originalPrice: 74999, image: "https://images.unsplash.com/photo-1611532736597-de2d4265f739?w=400&h=400&fit=crop", rating: 4.4, reviews: 312, stock: 30, sku: "MOB-SAM-A54", description: "6.4 inch Super AMOLED display, 128GB storage, 8GB RAM, 50MP triple camera system. 5000mAh battery with 25W fast charging.", specs: { Display: "6.4 inch AMOLED", Storage: "128GB", RAM: "8GB", Camera: "50MP Triple", Battery: "5000mAh" }, badge: "New" },
    { id: "SE006", name: "Orient Ceiling Fan 56 inch", category: "fans", brand: "Orient", price: 8999, originalPrice: 11500, image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=400&fit=crop", rating: 4.0, reviews: 156, stock: 50, sku: "FAN-ORI-56", description: "Premium copper motor ceiling fan with 3-speed control. Energy-efficient design with silent operation and elegant finish.", specs: { Size: "56 inch", Motor: "Copper", Speed: "3 Speed", Power: "80W", Warranty: "2 Years" } },
    { id: "SE007", name: "Westpoint Microwave Oven 25L", category: "kitchen-appliances", brand: "Westpoint", price: 22999, originalPrice: 27500, image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=400&fit=crop", rating: 4.2, reviews: 78, stock: 25, sku: "MW-WST-25", description: "Digital microwave oven with 10 auto cook menus, grill function, and child safety lock. Stainless steel cavity.", specs: { Capacity: "25 Liters", Power: "900W", Type: "Digital Grill", Menus: "10 Auto Cook", Warranty: "2 Years" } },
    { id: "SE008", name: "Canon EOS M50 Mark II Camera", category: "cameras", brand: "Canon", price: 189999, originalPrice: 210000, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop", rating: 4.7, reviews: 45, stock: 8, sku: "CAM-CAN-M50", description: "Mirrorless camera with 24.1MP APS-C sensor, 4K video, Dual Pixel CMOS AF, and vari-angle touchscreen. Perfect for content creators.", specs: { Sensor: "24.1MP APS-C", Video: "4K", AF: "Dual Pixel CMOS", Screen: "Vari-Angle Touch", Warranty: "1 Year" }, badge: "Premium" },
    { id: "SE009", name: "Dell Inspiron 15 Laptop", category: "laptops", brand: "Dell", price: 145000, originalPrice: 165000, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop", rating: 4.3, reviews: 92, stock: 12, sku: "LAP-DEL-I15", description: "15.6 inch FHD laptop with Intel Core i7 12th Gen, 16GB RAM, 512GB SSD. Perfect for work and entertainment with backlit keyboard.", specs: { Processor: "Intel i7 12th Gen", RAM: "16GB", Storage: "512GB SSD", Display: "15.6 inch FHD", Warranty: "2 Years" } },
    { id: "SE010", name: "Apple AirPods Pro 2nd Gen", category: "audio", brand: "Apple", price: 52999, originalPrice: 59999, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop", rating: 4.8, reviews: 267, stock: 20, sku: "AUD-AIR-PRO2", description: "Active noise cancellation, adaptive transparency, personalized spatial audio, and MagSafe charging case. USB-C connector.", specs: { Type: "TWS Earbuds", ANC: "Active", Battery: "6hrs + 30hrs case", Connectivity: "Bluetooth 5.3", Warranty: "1 Year" }, badge: "Top Rated" },
    { id: "SE011", name: "Panasonic Room Cooler 50L", category: "room-coolers", brand: "Panasonic", price: 28999, originalPrice: 33500, image: "https://images.unsplash.com/photo-1625961332071-0093e3859ffa?w=400&h=400&fit=crop", rating: 4.1, reviews: 54, stock: 16, sku: "RC-PAN-50", description: "Desert air cooler with 50L tank capacity, powerful fan, and ice chamber. Ideal for large rooms with energy-efficient motor.", specs: { Capacity: "50 Liters", FanSpeed: "3 Speed", Coverage: "300 sq ft", Power: "200W", Warranty: "2 Years" } },
    { id: "SE012", name: "JBL Charge 5 Bluetooth Speaker", category: "audio", brand: "JBL", price: 34999, originalPrice: 39999, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", rating: 4.6, reviews: 189, stock: 28, sku: "AUD-JBL-C5", description: "Portable Bluetooth speaker with powerful JBL Original Pro Sound, IP67 waterproof, 20 hours playtime, and powerbank function.", specs: { Power: "40W", Battery: "20 Hours", Waterproof: "IP67", Bluetooth: "5.1", Warranty: "1 Year" } },
    { id: "SE013", name: "Gree 2 Ton Inverter AC", category: "air-conditioners", brand: "Gree", price: 175000, originalPrice: 199000, image: "https://images.unsplash.com/photo-1631567091196-b8c8a2695b39?w=400&h=400&fit=crop", rating: 4.4, reviews: 98, stock: 11, sku: "AC-GRE-2T", description: "2 ton inverter split AC with G-10 inverter compressor, intelligent defrost, and ultra-quiet operation. Eco-friendly R32 refrigerant.", specs: { Capacity: "2 Ton", Type: "Split Inverter", EnergyClass: "A+++", Cooling: "Turbo", Warranty: "10 Years Compressor" }, badge: "Sale" },
    { id: "SE014", name: "Nokia G42 5G Smartphone", category: "mobiles", brand: "Nokia", price: 42999, originalPrice: 48000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop", rating: 4.0, reviews: 73, stock: 35, sku: "MOB-NOK-G42", description: "6.56 inch HD+ display, 128GB storage, 6GB RAM, 50MP AI camera. 5000mAh battery with 20W fast charging. 3 years of OS updates.", specs: { Display: "6.56 inch HD+", Storage: "128GB", RAM: "6GB", Camera: "50MP AI", Battery: "5000mAh" } },
    { id: "SE015", name: "LG 8kg Front Load Washer", category: "washing-machines", brand: "LG", price: 115000, originalPrice: 132000, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=400&fit=crop", rating: 4.5, reviews: 81, stock: 9, sku: "WM-LG-8", description: "AI direct drive front load washing machine with Steam technology. 14 wash programs, TurboWash 30, and ThinQ Wi-Fi connectivity.", specs: { Capacity: "8 kg", Type: "Front Load AI", Programs: "14 Wash", Technology: "Steam + TurboWash", Warranty: "5 Years Motor" } },
    { id: "SE016", name: "Sony WH-1000XM5 Headphones", category: "audio", brand: "Sony", price: 72999, originalPrice: 84999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", rating: 4.9, reviews: 342, stock: 14, sku: "AUD-SON-XM5", description: "Industry-leading noise canceling headphones with Auto NC Optimizer, 30-hour battery, multipoint connection, and speak-to-chat.", specs: { Type: "Over-Ear", ANC: "Industry Leading", Battery: "30 Hours", Driver: "30mm", Warranty: "1 Year" }, badge: "Best Seller" },
    { id: "SE017", name: "Hisense 43 inch Smart TV", category: "televisions", brand: "Hisense", price: 52999, originalPrice: 62000, image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&h=400&fit=crop", rating: 4.2, reviews: 117, stock: 20, sku: "TV-HIS-43", description: "43 inch Full HD Smart TV with VIDAA OS, Voice Control, Dolby Vision, and DTS Virtual:X sound. Built-in streaming apps.", specs: { Size: "43 inch", Resolution: "Full HD", SmartTV: "VIDAA OS", HDR: "Dolby Vision", Warranty: "2 Years" } },
    { id: "SE018", name: "Bosch Dishwasher 13 Place", category: "kitchen-appliances", brand: "Bosch", price: 185000, originalPrice: 210000, image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=400&fit=crop", rating: 4.6, reviews: 38, stock: 6, sku: "KW-BOS-DW13", description: "Freestanding dishwasher for 13 place settings. 5 wash programs, Extra Dry, AquaStop, and silence plus. Energy efficient A++ rating.", specs: { Capacity: "13 Place Settings", Programs: "5 Wash", Class: "A++", Noise: "48 dB", Warranty: "2 Years" }, badge: "Premium" },
    { id: "SE019", name: "Xiaomi Redmi Note 13 Pro", category: "mobiles", brand: "Xiaomi", price: 55999, originalPrice: 62999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop", rating: 4.3, reviews: 195, stock: 40, sku: "MOB-XIA-RN13P", description: "6.67 inch AMOLED 120Hz display, 200MP camera, 8GB RAM, 256GB storage. 67W turbo charging with 5100mAh battery.", specs: { Display: "6.67 inch AMOLED 120Hz", Storage: "256GB", RAM: "8GB", Camera: "200MP", Battery: "5100mAh 67W" }, badge: "Hot" },
    { id: "SE020", name: "Dawlance Deep Freezer 200L", category: "deep-freezers", brand: "Dawlance", price: 62999, originalPrice: 72000, image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop", rating: 4.0, reviews: 44, stock: 13, sku: "DF-DAW-200", description: "200 liter chest deep freezer with fast freezing technology. Thick insulation for energy efficiency. Converts to chiller in summer.", specs: { Capacity: "200 Liters", Type: "Chest", FastFreeze: "Yes", Conversion: "Chiller Mode", Warranty: "5 Years" } }
];

const CATEGORIES_DATA = [
    { id: "air-conditioners", name: "Air Conditioners", icon: "ac", count: 12, description: "Beat the heat with premium cooling" },
    { id: "refrigerators", name: "Refrigerators", icon: "fridge", count: 8, description: "Keep it fresh and cool" },
    { id: "washing-machines", name: "Washing Machines", icon: "washer", count: 10, description: "Smart laundry solutions" },
    { id: "televisions", name: "Televisions", icon: "tv", count: 15, description: "Immersive viewing experience" },
    { id: "mobiles", name: "Mobile Phones", icon: "mobile", count: 25, description: "Latest smartphones" },
    { id: "fans", name: "Fans", icon: "fan", count: 18, description: "Cool breeze for every room" },
    { id: "kitchen-appliances", name: "Kitchen Appliances", icon: "kitchen", count: 20, description: "Modern kitchen essentials" },
    { id: "laptops", name: "Laptops", icon: "laptop", count: 12, description: "Power on the go" },
    { id: "audio", name: "Audio & Speakers", icon: "audio", count: 14, description: "Premium sound experience" },
    { id: "cameras", name: "Cameras", icon: "camera", count: 8, description: "Capture every moment" },
    { id: "room-coolers", name: "Room Coolers", icon: "cooler", count: 10, description: "Affordable cooling solutions" },
    { id: "deep-freezers", name: "Deep Freezers", icon: "freezer", count: 6, description: "Bulk storage cooling" }
];

const BRANDS_DATA = ["Samsung", "Haier", "Dawlance", "TCL", "Orient", "Westpoint", "Canon", "Dell", "Apple", "Panasonic", "JBL", "Gree", "Nokia", "LG", "Sony", "Hisense", "Bosch", "Xiaomi"];

function getProducts() { return PRODUCTS_DATA; }
function getCategories() { return CATEGORIES_DATA; }
function getBrands() { return BRANDS_DATA; }

function getProductById(id) {
    return PRODUCTS_DATA.find(p => p.id === id);
}

function getProductsByCategory(catId) {
    return PRODUCTS_DATA.filter(p => p.category === catId);
}

function searchProducts(query) {
    const q = query.toLowerCase().trim();
    return PRODUCTS_DATA.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
}

function filterProducts(filters) {
    let results = [...PRODUCTS_DATA];
    if (filters.category) results = results.filter(p => p.category === filters.category);
    if (filters.brand && filters.brand.length) results = results.filter(p => filters.brand.includes(p.brand));
    if (filters.minPrice) results = results.filter(p => p.price >= filters.minPrice);
    if (filters.maxPrice) results = results.filter(p => p.price <= filters.maxPrice);
    if (filters.minRating) results = results.filter(p => p.rating >= filters.minRating);
    if (filters.search) {
        const q = filters.search.toLowerCase();
        results = results.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }
    if (filters.sort) {
        switch (filters.sort) {
            case "price-low": results.sort((a, b) => a.price - b.price); break;
            case "price-high": results.sort((a, b) => b.price - a.price); break;
            case "rating": results.sort((a, b) => b.rating - a.rating); break;
            case "name-az": results.sort((a, b) => a.name.localeCompare(b.name)); break;
            case "name-za": results.sort((a, b) => b.name.localeCompare(a.name)); break;
            case "newest": results.sort((a, b) => b.id.localeCompare(a.id)); break;
        }
    }
    return results;
}

function formatPrice(price) {
    return "Rs. " + price.toLocaleString("en-PK");
}

function getDiscount(original, current) {
    return Math.round(((original - current) / original) * 100);
}
