import { Award, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Since our establishment, we have been committed to serving the finest BBQ and grilled
            dishes, using only the freshest ingredients and time-honored cooking techniques
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Award Winning
            </h3>
            <p className="text-gray-600">
              Recognized for excellence in BBQ cuisine and exceptional service
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Made with Love
            </h3>
            <p className="text-gray-600">
              Every dish is prepared with passion and attention to detail
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Family Friendly
            </h3>
            <p className="text-gray-600">
              A welcoming atmosphere perfect for families and friends
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Founded by passionate grill masters, BBQ Grill House has become a beloved destination
              for food enthusiasts. We combine traditional BBQ techniques with modern culinary
              innovation to create unforgettable dining experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our commitment to quality means sourcing the finest meats and freshest produce,
              marinating them in our signature blends, and cooking them to perfection over open
              flames. Every bite tells a story of dedication and craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
