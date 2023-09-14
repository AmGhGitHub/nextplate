import ImageFallback from "@/helpers/ImageFallback";

import { getListPage } from "@/lib/contentParser";

import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="text-center md:col-4 lg:col-4">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={image}
                  width={200}
                  height={200}
                  alt={title}
                />
              )}
              <h3 className="h4 mb-6">Tyler Tarnoczi</h3>

              <div className="content">CEO</div>
            </div>
            <div className="text-center md:col-4 lg:col-4">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={image}
                  width={200}
                  height={200}
                  alt={title}
                />
              )}
              <h3 className="h4 mb-6">Mehdi Bahonar</h3>

              <div className="content">CFO</div>
            </div>
            <div className="text-center md:col-4 lg:col-4">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={image}
                  width={200}
                  height={200}
                  alt={title}
                />
              )}
              <h3 className="h4 mb-6">Amir Ghaderi</h3>

              <div className="content">CTO</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
