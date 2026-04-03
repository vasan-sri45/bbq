import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Flame className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold">BBQ Grill House</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; 2024 BBQ Grill House. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Crafted with passion for great food
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
