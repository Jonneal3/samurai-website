import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        <span className="font-medium text-white">Samurai &copy; {currentYear}</span>
      </p>
    </div>
  );
}
