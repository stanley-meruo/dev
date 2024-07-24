
import Button from "../components/button";
import hero from "../assets/hero.png";
import Carousel from "../components/carousel";
import skycrapper1 from "../assets/skycrapper1.png";
import ImageSlider from "../components/slider";
import Expertise from "../components/expertise";
import ImageToggle from "../components/image-toggle";
import Testimony from "../components/testimony";
import Carouselblog from "../components/carousel-blog.jsx";
import Blog from "../components/blog.jsx"
import Footer from "../components/footer.jsx";
import CarouselSection from "../components/carousel-section.jsx";



const Home = () => {
  return (
    <>
     
      <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-6">
        <img src={hero} className="w-full lg:w-2/4" />

        <div className="text-center px-5 md:px-10 lg:text-left">
          <p className="font-medium text-3xl my-4 md:text-4xl lg:text-5xl xl:text-6xl xl:pr-16">
            Trusted Real Estate Property for you
          </p>
          <p className="text-gray-700 lg:my-6 xl:pr-16 ">
            Looking for your dream house or property. Search here and select
            your best one from more than 1 million listing
          </p>
          <div className="flex justify-center gap-4 my-6 text-sm font-montserrat lg:justify-start lg:my-12">
            <Button
              title="Discover More"
              type="button"
              className="bg-black text-white py-3 px-5 hover:bg-white hover:text-black lg:hidden"
            />
            <Button
              title="Discover Properties"
              type="button"
              className="bg-black text-white py-3 px-5 hover:bg-white hover:text-black hidden lg:flex"
            />
            <Button
              title="Learn More"
              type="button"
              className="bg-white py-3 px-5 hover:bg-black hover:text-white"
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-sm font-medium p-4 border-t-0 shadow-lg drop-shadow-lg shadow-gray-300 my-10 sm:gap-6 sm:w-[500px] sm:mx-auto md:gap-8 lg:w-[400px] lg:mx-0 lg:gap-6 xl:w-[500px] xl:gap-10">
            <p className="grid text-center">
              35+<span className="text-[10px]">YEARS IN BUSINESS</span>
            </p>
            <p className="grid text-center">
              200+M
              <span className="text-[10px]">DEAL VOLUME IN PAST 12 YEARS</span>
            </p>
            <p className="grid text-center">
              $1B<span className="text-[10px]">IN TOTAL SALES</span>
            </p>
          </div>
        </div>
      </div>

      <section className="p-5 lg:pt-16 lg:px-8">
        <div className="text-center px-2">
          <p className="text-xl sm:text-2xl lg:text-3xl">
            WHAT AREA ARE YOU LOOKING FOR?
          </p>
          <p className="text-gray-700 my-5">
            We have the best to suit your interes and are all afordable. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="sm:hidden">
          <Carousel />
        </div>
        <CarouselSection />
      </section>

      <section className="p-5 lg:pt-0 lg:px-8">
        <div className="hidden lg:block lg:text-center">
          <p className="lg:text-3xl">WHO WE ARE?</p>
          <p className="my-4">
            Marius We have the best to suit your interes and are all afordable.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="lg:flex lg:items-center lg:gap-2 lg:my-4 xl:gap-28">
          <div className="text-center p-2 lg:text-left lg:w-2/4">
            <p className="text-xl sm:text-2xl lg:font-montserrat lg:tracking-wider lg:text-3xl lg:my-8 lg:w-96 xl:my-12">
              MEET THE WESTON REAL ESTATE
            </p>
            <p className="text-gray-700 my-4 lg:my-6">
              We have the best to suit your interes and are all afordable. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
              corporis. Delectus ex cum quae voluptatibus similique odit,
              temporibus perferendis consequatur, tempore placeat possimus
              commodi necessitatibus debitis totam quisquam fugiat voluptate.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              perferendis accusantium est, tempora unde iusto! Consectetur,
              ipsum blanditiis nesciunt necessitatibus dolorem ducimus aliquam
              maiores voluptatibus corporis excepturi inventore neque
              accusantium. <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              voluptas sapiente eos, qui atque, nulla modi.
            </p>
            <Button
              title="LEARN MORE"
              type="button"
              className="bg-white text-black py-2 px-5 hover:bg-black hover:text-white border-2 border-black my-4 hidden lg:block lg:my-8"
            />
          </div>
          <img src={skycrapper1} className="py-4 mx-auto lg:w-2/4" />
        </div>
      </section>

      <section className="py-5">
        <div className="text-center px-5">
          <p className="text-xl sm:text-2xl lg:text-3xl">EXCLUSIVE LISTINGS</p>
          <p className="text-gray-600 p-2">
            Amet mollitia a voluptatem deserunt, eius harum ullam, ab corrupti
            eum delectus atque quibusdam ratione? Cupiditate, impedit dolor
            inventore quidem in ducimus!
          </p>
        </div>
        <ImageSlider />
        <div className="grid text-sm font-medium font-montserrat">
          <Button
            title="View All Properties"
            type="button"
            className="bg-white text-black py-2 px-5 hover:bg-black hover:text-white border-2 border-black mx-auto my-4 lg:hidden"
          />
        </div>
      </section>

      <section className="py-5">
        <div className="text-center px-5">
          <p className="text-xl sm:text-2xl lg:text-3xl">AREA OF EXPERTISE</p>
          <p className="text-gray-600 p-2">
            Amet mollitia a voluptatem deserunt, eius harum ullam, ab corrupti
            eum delectus atque quibusdam ratione? Cupiditate, impedit dolor
            inventore quidem in ducimus!
          </p>
        </div>
        <Expertise />
        <ImageToggle />
      </section>

      <section className="p-5 bg-gray-100">
        <div className="text-center px-5 py-4">
          <p className="text-xl sm:text-2xl lg:text-3xl ">
            WHAT OUR CLIENT SAYS
          </p>
          <p className="text-gray-600 p-2">
            We have the best to suit your interes and are all afordable. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="bg-white p-4 lg:px-12 lg:m-8">
          <Testimony />
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="text-center px-5 py-4">
          <p className="text-xl sm:text-2xl lg:text-3xl">OUR BLOGS</p>
          <p className="text-gray-600 p-2">
            We have the best to suit your interes and are all afordable. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <Carouselblog />
        <Blog/>
      </section>

      <Footer />
    </>
  );
};

export default Home;
