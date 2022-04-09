import "./ColorPalate.scss";

const ColorPalate = () => {
  const handleOpen = () => {
    document.getElementById("color__palate").classList.toggle("open");
  };

  const handleChangeColor = (e) => {
    document
      .getElementById("switch_style")
      .setAttribute("href", `./switch_style/${e.target.id}.css`);
  };
  return (
    <div id="color__palate" className="popOut">
      <div
        id="color__toggle"
        onClick={handleOpen}
        className="toggle text__center"
      >
        <i className="fa fa-cog fa-spin"></i>
      </div>
      <div className="colors text__center">
        <p className="text-center">Pick a Color</p>
        <ul>
          <li
            onClick={(e) => handleChangeColor(e)}
            id="blue"
            className="color1"
          ></li>
          <li
            onClick={(e) => handleChangeColor(e)}
            id="teal"
            className="color2"
          ></li>
          <li
            onClick={(e) => handleChangeColor(e)}
            id="gray"
            className="color3"
          ></li>
          <li
            onClick={(e) => handleChangeColor(e)}
            id="green"
            className="color4"
          ></li>
          <li
            onClick={(e) => handleChangeColor(e)}
            id="purple"
            className="color5"
          ></li>
          <li
            onClick={(e) => handleChangeColor(e)}
            id="brown"
            className="color6"
          ></li>
          <li
            onClick={(e) => handleChangeColor(e)}
            id="red"
            className="color7"
          ></li>
          <li
            onClick={(e) => handleChangeColor(e)}
            id="pink"
            className="color8"
          ></li>
        </ul>
        <p className="text-center">Blend &amp; Dark</p>
        <ul>
          <li id="blue__blend" className="color1"></li>
          <li id="green__blend" className="color4"></li>
          <li
            onClick={(e) => handleChangeColor(e)}
            id="white"
            className="color10"
          ></li>
        </ul>
      </div>
    </div>
  );
};

export default ColorPalate;
