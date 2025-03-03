import { Review } from "./Review";

const testimonials = [
  {
    name: "Mohammed Al Naimi",
    title: "Villa Owner",
    text: "Exceptional work on our majlis and curtains. The team's attention to detail and craftsmanship is outstanding. They transformed our living space completely.",
  },
  {
    name: "Fatima Al Sayed",
    title: "Home Owner",
    text: "Their sofa reupholstery service is amazing. They gave our old sofa a completely new life with premium fabric and excellent workmanship.",
  },
  {
    name: "Ahmed Al Emadi",
    title: "Business Owner",
    text: "Outstanding TV table installation. The quality of work and professional service exceeded our expectations.",
  },
];

export function Reviews() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Read testimonials from our satisfied customers across Qatar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-lg p-6">
              <Review name={testimonial.name} text={testimonial.text} />
              <p className="text-gray-400 text-sm ml-16 -mt-2">
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
