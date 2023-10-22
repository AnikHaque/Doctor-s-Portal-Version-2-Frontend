import Navbar from "@/components/ui/Navbar/Navbar";

const PublicHeader = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/available-services" },
    { key: "3", label: "Doctors", href: "/available-doctors" },
    { key: "4", label: "About Us", href: "/about-us" },
    { key: "5", label: "Contact Us", href: "/contact-us" },
  ];
  return (
    <>
      <Navbar items={items} />
    </>
  );
};

export default PublicHeader;
