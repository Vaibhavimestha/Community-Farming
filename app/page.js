"use client";

import { useMemo, useState } from "react";

import {
  Menu,
  X,
  Sprout,
  Tractor,
  ShoppingBasket,
  Store,
  BookOpen,
  Users,
  ArrowRight,
  Search,
  Plus,
  MapPin,
  IndianRupee,
  CheckCircle,
  Leaf,
  TrendingUp,
  Handshake,
  Phone,
  Mail,
  CalendarDays,
} from "lucide-react";

const equipmentData = [
  {
    id: 1,
    name: "Mahindra Tractor",
    category: "Tractor",
    price: 800,
    unit: "day",
    location: "Mangalore",
    owner: "Ramesh",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=700",
  },
  {
    id: 2,
    name: "Power Tiller",
    category: "Tiller",
    price: 500,
    unit: "day",
    location: "Udupi",
    owner: "Suresh",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700",
  },
  {
    id: 3,
    name: "Harvesting Machine",
    category: "Harvester",
    price: 1500,
    unit: "day",
    location: "Karkala",
    owner: "Manoj",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700",
  },
];

const groupData = [
  {
    id: 1,
    name: "Organic Fertilizer Group Purchase",
    product: "Organic Fertilizer",
    target: 100,
    joined: 72,
    price: 500,
    location: "Udupi",
  },
  {
    id: 2,
    name: "Quality Rice Seeds",
    product: "Rice Seeds",
    target: 80,
    joined: 50,
    price: 300,
    location: "Mangalore",
  },
  {
    id: 3,
    name: "Drip Irrigation Materials",
    product: "Drip Irrigation Kit",
    target: 60,
    joined: 35,
    price: 1200,
    location: "Kundapura",
  },
];

const cropData = [
  {
    id: 1,
    name: "Fresh Organic Rice",
    category: "Grains",
    price: 45,
    unit: "kg",
    farmer: "Ramesh",
    location: "Udupi",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700",
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 30,
    unit: "kg",
    farmer: "Suresh",
    location: "Mangalore",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=700",
  },
  {
    id: 3,
    name: "Fresh Green Vegetables",
    category: "Vegetables",
    price: 25,
    unit: "kg",
    farmer: "Manoj",
    location: "Karkala",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700",
  },
];

const knowledgeData = [
  {
    title: "Organic Farming Methods",
    description:
      "Learn natural techniques to improve soil health and grow healthy crops.",
    icon: Leaf,
  },
  {
    title: "Modern Irrigation",
    description:
      "Understand water-saving irrigation methods for better productivity.",
    icon: Sprout,
  },
  {
    title: "Smart Farming Tips",
    description:
      "Discover useful practices to reduce costs and improve crop production.",
    icon: BookOpen,
  },
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [equipmentSearch, setEquipmentSearch] = useState("");
  const [cropSearch, setCropSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [listingType, setListingType] = useState("equipment");

  const [equipment, setEquipment] = useState(equipmentData);
  const [crops, setCrops] = useState(cropData);
  const [joinedGroups, setJoinedGroups] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    location: "",
    owner: "",
    image: "",
  });

  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(equipmentSearch.toLowerCase()) ||
        item.location.toLowerCase().includes(equipmentSearch.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [equipment, equipmentSearch, activeCategory]);

  const filteredCrops = useMemo(() => {
    return crops.filter((item) => {
      return (
        item.name.toLowerCase().includes(cropSearch.toLowerCase()) ||
        item.location.toLowerCase().includes(cropSearch.toLowerCase())
      );
    });
  }, [crops, cropSearch]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Equipment", href: "#equipment" },
    { name: "Group Buying", href: "#group-buying" },
    { name: "Marketplace", href: "#marketplace" },
    { name: "Knowledge", href: "#knowledge" },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8f3] text-gray-800">

      {/* NAVIGATION BAR */}

      <nav className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <a href="#home" className="flex items-center gap-2">
            <div className="rounded-xl bg-green-700 p-2 text-white">
              <Sprout size={25} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-green-800">
                Community Farming
              </h1>
              <p className="text-xs text-gray-500">
                Grow Together, Prosper Together
              </p>
            </div>
          </a>

          {/* DESKTOP MENU */}

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-green-700"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => {
                setListingType("equipment");
                setShowAddForm(true);
              }}
              className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              + Add Listing
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-green-800 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div className="border-t border-green-100 bg-white px-5 py-4 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false);
                setListingType("equipment");
                setShowAddForm(true);
              }}
              className="mt-3 w-full rounded-lg bg-green-700 px-4 py-3 font-semibold text-white"
            >
              + Add Listing
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}

      <section
        id="home"
        className="relative overflow-hidden bg-green-950"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800"
            alt="Green agricultural farmland"
            className="h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-32">

          <div className="text-white">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-300/40 bg-green-800/60 px-4 py-2 text-sm text-green-100">
              <Sprout size={17} />
              Empowering Farmers Through Community
            </div>

            <h2 className="max-w-2xl text-4xl leading-tight font-bold md:text-6xl">
              Together We Grow.
              <span className="block text-green-300">
                Together We Succeed.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-green-100 md:text-lg">
              A community-driven platform that helps farmers share
              agricultural equipment, purchase resources together,
              connect directly with buyers, and grow their income.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#equipment"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-green-900 transition hover:bg-green-100"
              >
                Explore Resources
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="rounded-lg border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </a>

            </div>

          </div>

          <div className="hidden md:block">

            <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">

              <img
                src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=900"
                alt="Farmer working in a green field"
                className="h-[400px] w-full rounded-2xl object-cover"
              />

              <div className="flex items-center justify-between p-4 text-white">
                <div>
                  <p className="text-sm text-green-200">
                    Our mission
                  </p>
                  <h3 className="mt-1 text-xl font-bold">
                    Stronger Farming Communities
                  </h3>
                </div>

                <div className="rounded-full bg-green-400 p-3 text-green-950">
                  <Handshake size={28} />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* STATISTICS SECTION */}

      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-5">

        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-4">

          {[
            {
              number: "500+",
              label: "Farmers Connected",
              icon: Users,
            },
            {
              number: "100+",
              label: "Resources Shared",
              icon: Tractor,
            },
            {
              number: "50+",
              label: "Group Purchases",
              icon: ShoppingBasket,
            },
            {
              number: "₹2L+",
              label: "Estimated Savings",
              icon: TrendingUp,
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center py-4 text-center"
              >
                <Icon size={27} className="mb-3 text-green-700" />

                <h3 className="text-2xl font-bold text-green-900">
                  {stat.number}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>

      </section>
      {/* ABOUT SECTION */}

      <section id="about" className="mx-auto max-w-7xl px-5 py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <span className="font-semibold text-green-700">
              ABOUT OUR PLATFORM
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Building a Stronger Farming Community
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Small farmers often face challenges such as expensive
              agricultural equipment, high input costs, and difficulty
              finding buyers for their crops.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Community Farming brings farmers together through a
              common platform where they can share resources, buy
              agricultural products in groups, and sell crops directly
              to customers.
            </p>

            <div className="mt-7 space-y-4">

              {[
                "Reduce farming expenses through resource sharing.",
                "Purchase seeds and fertilizers at better prices.",
                "Connect farmers directly with crop buyers.",
                "Share knowledge and improve farming practices.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={21}
                    className="mt-1 shrink-0 text-green-700"
                  />

                  <p className="text-gray-700">{item}</p>
                </div>
              ))}

            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900"
              alt="Agricultural farmland"
              className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute -bottom-6 -left-3 rounded-2xl bg-green-800 p-6 text-white shadow-xl md:-left-6">
              <Sprout size={30} />
              <h3 className="mt-2 text-xl font-bold">
                Grow Together
              </h3>
              <p className="mt-1 text-sm text-green-100">
                Share resources. Share success.
              </p>
            </div>
          </div>

        </div>

      </section>
            {/* EQUIPMENT SHARING SECTION */}

      <section id="equipment" className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <span className="font-semibold text-green-700">
                RESOURCE SHARING
              </span>

              <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
                Agricultural Equipment Sharing
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                Find and rent agricultural equipment from nearby
                farmers instead of purchasing expensive machinery.
              </p>
            </div>

            <button
              onClick={() => {
                setListingType("equipment");
                setShowAddForm(true);
              }}
              className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              <Plus size={18} />
              Share Equipment
            </button>

          </div>

          {/* SEARCH BAR */}

          <div className="mt-9 flex flex-col gap-4 md:flex-row">

            <div className="relative flex-1">

              <Search
                size={20}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search equipment or location..."
                value={equipmentSearch}
                onChange={(e) => setEquipmentSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 outline-none transition focus:border-green-600"
              />

            </div>

            <div className="flex flex-wrap gap-2">

              {["All", "Tractor", "Tiller", "Harvester"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-green-100"
                  }`}
                >
                  {category}
                </button>
              ))}

            </div>

          </div>

          {/* EQUIPMENT CARDS */}

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filteredEquipment.map((item) => (

              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover"
                  />

                  <span className="absolute top-4 left-4 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                    Available
                  </span>

                </div>

                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.category}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-green-800">
                        ₹{item.price}
                      </p>

                      <p className="text-xs text-gray-500">
                        per {item.unit}
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 space-y-2 text-sm text-gray-600">

                    <p className="flex items-center gap-2">
                      <MapPin size={16} className="text-green-700" />
                      {item.location}
                    </p>

                    <p className="flex items-center gap-2">
                      <Users size={16} className="text-green-700" />
                      Owner: {item.owner}
                    </p>

                  </div>

                  <button
                    onClick={() => setSelectedItem(item)}
                    className="mt-6 w-full rounded-lg bg-green-50 py-3 font-semibold text-green-800 transition hover:bg-green-700 hover:text-white"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-2 inline" />
                  </button>

                </div>

              </div>

            ))}

          </div>

          {filteredEquipment.length === 0 && (
            <div className="mt-10 rounded-xl bg-gray-50 p-10 text-center">
              <Tractor
                size={40}
                className="mx-auto text-gray-400"
              />

              <h3 className="mt-3 text-lg font-semibold">
                No equipment found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching with another name or location.
              </p>
            </div>
          )}

        </div>

      </section>
            {/* GROUP BUYING SECTION */}

      <section id="group-buying" className="bg-[#f0f7ed] py-20">

        <div className="mx-auto max-w-7xl px-5">

          <div className="text-center">

            <span className="font-semibold text-green-700">
              BUY TOGETHER, SAVE TOGETHER
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Group Buying Opportunities
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Farmers can combine their orders to purchase seeds,
              fertilizers, and agricultural materials at affordable prices.
            </p>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {groupData.map((group) => {

              const progress = Math.min(
                (group.joined / group.target) * 100,
                100
              );

              const isJoined = joinedGroups.includes(group.id);

              return (

                <div
                  key={group.id}
                  className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex items-center justify-between">

                    <div className="rounded-xl bg-green-100 p-3 text-green-800">
                      <ShoppingBasket size={26} />
                    </div>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                      Group Purchase
                    </span>

                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {group.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Product: {group.product}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-sm text-gray-500">
                      Farmers joined
                    </span>

                    <span className="font-bold text-green-800">
                      {group.joined + (isJoined ? 1 : 0)} / {group.target}
                    </span>

                  </div>

                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">

                    <div
                      className="h-full rounded-full bg-green-600 transition-all"
                      style={{
                        width: `${Math.min(
                          ((group.joined + (isJoined ? 1 : 0)) /
                            group.target) *
                            100,
                          100
                        )}%`,
                      }}
                    />

                  </div>

                  <div className="mt-5 flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-500">
                        Estimated price
                      </p>

                      <p className="text-2xl font-bold text-green-800">
                        ₹{group.price}
                      </p>
                    </div>

                    <p className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin size={15} />
                      {group.location}
                    </p>

                  </div>

                  <button
                    onClick={() => {
                      if (!isJoined) {
                        setJoinedGroups((previous) => [
                          ...previous,
                          group.id,
                        ]);
                      }
                    }}
                    disabled={isJoined}
                    className={`mt-6 w-full rounded-lg py-3 font-semibold transition ${
                      isJoined
                        ? "cursor-not-allowed bg-gray-200 text-gray-600"
                        : "bg-green-700 text-white hover:bg-green-800"
                    }`}
                  >
                    {isJoined ? "Joined Successfully" : "Join Group"}
                  </button>

                </div>

              );
            })}

          </div>

        </div>

      </section>
            {/* CROP MARKETPLACE SECTION */}

      <section id="marketplace" className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <span className="font-semibold text-green-700">
                DIRECT FARMER TO BUYER
              </span>

              <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
                Fresh Crop Marketplace
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                Farmers can showcase their agricultural products
                and connect directly with customers and buyers.
              </p>

            </div>

            <button
              onClick={() => {
                setListingType("crop");
                setShowAddForm(true);
              }}
              className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              <Plus size={18} />
              Sell Your Crops
            </button>

          </div>

          {/* CROP SEARCH */}

          <div className="relative mt-9 max-w-xl">

            <Search
              size={20}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search crops or location..."
              value={cropSearch}
              onChange={(e) => setCropSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 outline-none transition focus:border-green-600"
            />

          </div>

          {/* CROP CARDS */}

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filteredCrops.map((crop) => (

              <div
                key={crop.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative">

                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="h-56 w-full object-cover"
                  />

                  <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-800">
                    {crop.category}
                  </span>

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-bold text-gray-900">
                    {crop.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-500">
                        Price per {crop.unit}
                      </p>

                      <p className="text-2xl font-bold text-green-800">
                        ₹{crop.price}
                      </p>
                    </div>

                    <span className="rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-800">
                      Fresh Produce
                    </span>

                  </div>

                  <div className="mt-5 space-y-2 text-sm text-gray-600">

                    <p className="flex items-center gap-2">
                      <Users size={16} className="text-green-700" />
                      Farmer: {crop.farmer}
                    </p>

                    <p className="flex items-center gap-2">
                      <MapPin size={16} className="text-green-700" />
                      {crop.location}
                    </p>

                  </div>

                  <button
                    onClick={() => setSelectedItem(crop)}
                    className="mt-6 w-full rounded-lg bg-green-50 py-3 font-semibold text-green-800 transition hover:bg-green-700 hover:text-white"
                  >
                    Contact Farmer
                    <ArrowRight size={16} className="ml-2 inline" />
                  </button>

                </div>

              </div>

            ))}

          </div>

          {filteredCrops.length === 0 && (
            <div className="mt-10 rounded-xl bg-gray-50 p-10 text-center">

              <Store
                size={40}
                className="mx-auto text-gray-400"
              />

              <h3 className="mt-3 text-lg font-semibold">
                No crops found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching for another crop or location.
              </p>

            </div>
          )}

        </div>

      </section>
            {/* KNOWLEDGE HUB SECTION */}

      <section id="knowledge" className="bg-[#f0f7ed] py-20">

        <div className="mx-auto max-w-7xl px-5">

          <div className="text-center">

            <span className="font-semibold text-green-700">
              LEARN AND GROW
            </span>

            <h2 className="mt-3 text-3xl font-bold text-green-950 md:text-4xl">
              Farming Knowledge Hub
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Discover useful agricultural knowledge, modern farming
              methods, and practical tips to improve productivity.
            </p>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">

            {knowledgeData.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="inline-flex rounded-xl bg-green-100 p-4 text-green-800">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <a
                    href="https://agriculture.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-900"
                  >
                    Learn More
                    <ArrowRight size={17} />
                  </a>

                </div>

              );
            })}

          </div>

        </div>

      </section>
            {/* CALL TO ACTION SECTION */}

      <section className="bg-green-900 py-16">

        <div className="mx-auto max-w-5xl px-5 text-center text-white">

          <Sprout size={45} className="mx-auto text-green-300" />

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Let's Build a Better Farming Future Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100">
            Join a growing farming community. Share resources,
            reduce expenses, connect with buyers, and grow together.
          </p>

          <button
            onClick={() => {
              setListingType("equipment");
              setShowAddForm(true);
            }}
            className="mt-8 rounded-lg bg-white px-7 py-3 font-bold text-green-900 transition hover:bg-green-100"
          >
            Join Our Community
            <ArrowRight size={18} className="ml-2 inline" />
          </button>

        </div>

      </section>
            {/* ADD LISTING MODAL */}

      {showAddForm && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4">

          <div className="my-8 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-green-900">
                  Add New Listing
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Share your resources with other farmers.
                </p>
              </div>

              <button
                onClick={() => setShowAddForm(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                aria-label="Close form"
              >
                <X size={23} />
              </button>

            </div>

            {/* LISTING TYPE */}

            <div className="mt-6 grid grid-cols-2 gap-3">

              <button
                onClick={() => {
                  setListingType("equipment");
                  setFormData({
                    name: "",
                    category: "",
                    price: "",
                    location: "",
                    owner: "",
                    image: "",
                  });
                }}
                className={`rounded-lg border p-3 font-semibold ${
                  listingType === "equipment"
                    ? "border-green-700 bg-green-50 text-green-800"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                <Tractor size={20} className="mx-auto mb-1" />
                Equipment
              </button>

              <button
                onClick={() => {
                  setListingType("crop");
                  setFormData({
                    name: "",
                    category: "",
                    price: "",
                    location: "",
                    owner: "",
                    image: "",
                  });
                }}
                className={`rounded-lg border p-3 font-semibold ${
                  listingType === "crop"
                    ? "border-green-700 bg-green-50 text-green-800"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                <ShoppingBasket size={20} className="mx-auto mb-1" />
                Crop
              </button>

            </div>

            {/* FORM FIELDS */}

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();

                const newItem = {
                  id: Date.now(),
                  name: formData.name,
                  category: formData.category,
                  price: Number(formData.price),
                  unit: listingType === "equipment" ? "day" : "kg",
                  location: formData.location,
                  image:
                    formData.image ||
                    (listingType === "equipment"
                      ? "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700"
                      : "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700"),
                  ...(listingType === "equipment"
                    ? { owner: formData.owner }
                    : { farmer: formData.owner }),
                };

                if (listingType === "equipment") {
                  setEquipment((previous) => [
                    newItem,
                    ...previous,
                  ]);
                } else {
                  setCrops((previous) => [
                    newItem,
                    ...previous,
                  ]);
                }

                setFormData({
                  name: "",
                  category: "",
                  price: "",
                  location: "",
                  owner: "",
                  image: "",
                });

                setShowAddForm(false);
                setEquipmentSearch("");
                setCropSearch("");
                setActiveCategory("All");
              }}
            >

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  {listingType === "equipment"
                    ? "Equipment Name"
                    : "Crop Name"}
                </label>

                <input
                  type="text"
                  required
                  placeholder={
                    listingType === "equipment"
                      ? "Example: Mahindra Tractor"
                      : "Example: Fresh Organic Rice"
                  }
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-green-600"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Category
                </label>

                {listingType === "equipment" ? (

                  <select
                    required
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-green-600"
                  >
                    <option value="">Select category</option>
                    <option value="Tractor">Tractor</option>
                    <option value="Tiller">Tiller</option>
                    <option value="Harvester">Harvester</option>
                  </select>

                ) : (

                  <select
                    required
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-green-600"
                  >
                    <option value="">Select category</option>
                    <option value="Grains">Grains</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Other">Other</option>
                  </select>

                )}

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Price (₹)
                </label>

                <input
                  type="number"
                  min="1"
                  required
                  placeholder="Enter price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-green-600"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Location
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-green-600"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  {listingType === "equipment"
                    ? "Owner Name"
                    : "Farmer Name"}
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.owner}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      owner: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-green-600"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Image URL (Optional)
                </label>

                <input
                  type="url"
                  placeholder="Paste an image URL"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-green-600"
                />

              </div>

              <div className="flex gap-3 pt-3">

                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 rounded-lg border border-gray-200 py-3 font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800"
                >
                  Add Listing
                </button>

              </div>

            </form>

          </div>

        </div>

      )}
            {/* FOOTER */}

      <footer className="bg-gray-950 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-green-700 p-2">
                <Sprout size={25} />
              </div>

              <h2 className="text-xl font-bold">
                Community Farming
              </h2>

            </div>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              Connecting farmers, sharing resources, reducing costs,
              and building a sustainable agricultural community.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              {navLinks.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 transition hover:text-green-400"
                >
                  {link.name}
                </a>

              ))}

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-lg font-bold">
              Contact Information
            </h3>

            <div className="mt-5 space-y-4 text-gray-400">

              <p className="flex items-center gap-3">
                <Mail size={18} className="text-green-400" />
                communityfarming@example.com
              </p>

              <p className="flex items-center gap-3">
                <Phone size={18} className="text-green-400" />
                +91 98765 43210
              </p>

              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-green-400" />
                Karnataka, India
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 px-5 py-6 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} Community Farming Hub.
          All rights reserved.

          <p className="mt-2">
            Built for a stronger and sustainable farming community.
          </p>

        </div>

      </footer>
            {/* ITEM DETAILS POPUP */}

      {selectedItem && (

        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4">

          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <div className="flex items-start justify-between gap-3">

                <h2 className="text-2xl font-bold text-green-900">
                  {selectedItem.name}
                </h2>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="rounded-lg p-2 hover:bg-gray-100"
                  aria-label="Close details"
                >
                  <X size={22} />
                </button>

              </div>

              <div className="mt-5 space-y-3 text-gray-600">

                <p>
                  <strong>Category:</strong> {selectedItem.category}
                </p>

                <p>
                  <strong>Price:</strong> ₹{selectedItem.price} per{" "}
                  {selectedItem.unit}
                </p>

                <p>
                  <strong>Location:</strong> {selectedItem.location}
                </p>

                <p>
                  <strong>
                    {selectedItem.owner ? "Owner:" : "Farmer:"}
                  </strong>{" "}
                  {selectedItem.owner || selectedItem.farmer}
                </p>

              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

