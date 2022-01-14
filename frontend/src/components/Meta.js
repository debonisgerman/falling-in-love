import React from "react";
import MetaTags from 'react-meta-tags';

const Meta = ({ title, description, keywords, type, image }) => {
  return (
    <MetaTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Og meta */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={image} />

    </MetaTags>
  );
};

Meta.defaultProps = {
  title: "Falling In Love",
  keywords: "lenceria, lenceria fina, ropa interior, falling in love, lenceria peruana",
  description: "Lencería fina, hecha con amor.",
  type: "website",
  image: "https://www.fallinginlove.pe/images/logo2.png"
};

export default Meta;
