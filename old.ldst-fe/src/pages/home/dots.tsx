function Dots({ activeIndex, onclick, imageSlider }: any) {
  return (
    <div className="all-dots">
      {imageSlider.map((slide: any, index: any) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
