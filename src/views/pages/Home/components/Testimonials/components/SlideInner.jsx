const SlideInner = ({ img, desc, signature }) => {
  return (
    <div className="slide__inner">
      <div className="client__img center__block">
        <img alt="client" className="center__block" src={img} />
      </div>
      <blockquote>
        {desc}
        <cite>{signature}</cite>
      </blockquote>
    </div>
  );
};

export default SlideInner;
