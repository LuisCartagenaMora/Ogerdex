const typeIcons = {
  normal: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/20px-Normal_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/30px-Normal_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/40px-Normal_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(159, 161, 159)",
  },
  fighting: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/20px-Fighting_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/30px-Fighting_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/40px-Fighting_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(255, 128, 0)",
  },
  flying: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/20px-Flying_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/30px-Flying_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/40px-Flying_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(129, 185, 239)",
  },
  poison: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/20px-Poison_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/30px-Poison_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/40px-Poison_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(145,65,203)",
  },
  ground: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/20px-Ground_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/30px-Ground_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/40px-Ground_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(145,81,33)",
  },
  rock: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/20px-Rock_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/30px-Rock_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/40px-Rock_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(175,169,129)",
  },
  bug: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/20px-Bug_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/30px-Bug_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/40px-Bug_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(144,160,25)",
  },
  ghost: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/20px-Ghost_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/30px-Ghost_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/40px-Ghost_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(112,65,112)",
  },
  steel: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/20px-Steel_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/30px-Steel_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/40px-Steel_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(96,161,184)",
  },
  fire: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/5/5e/Fire_icon.png/20px-Fire_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/5/5e/Fire_icon.png/30px-Fire_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/5/5e/Fire_icon.png/40px-Fire_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(230,40,41)",
  },
  water: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/20px-Water_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/30px-Water_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/40px-Water_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(41,128,239)",
  },
  grass: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/20px-Grass_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/30px-Grass_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/40px-Grass_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(63,161,41)",
  },
  electric: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/20px-Electric_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/30px-Electric_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/40px-Electric_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(250,192,0)",
  },
  psychic: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/a/a6/Psychic_icon.png/20px-Psychic_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/a/a6/Psychic_icon.png/30px-Psychic_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/a6/Psychic_icon.png/40px-Psychic_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(239,65,121)",
  },
  ice: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/8/83/Ice_icon.png/20px-Ice_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/8/83/Ice_icon.png/30px-Ice_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/8/83/Ice_icon.png/40px-Ice_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(61,206,242)",
  },
  dragon: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/20px-Dragon_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/30px-Dragon_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/40px-Dragon_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(80,96,225)",
  },
  dark: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/3/33/Dark_icon.png/20px-Dark_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/3/33/Dark_icon.png/30px-Dark_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/3/33/Dark_icon.png/40px-Dark_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(98,77,78)",
  },
  fairy: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/5/5a/Fairy_icon.png/20px-Fairy_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/5/5a/Fairy_icon.png/30px-Fairy_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/5/5a/Fairy_icon.png/40px-Fairy_icon.png 2x"
        data-file-width="64"
        data-file-height="64"
      ></img>
    ),
    color: "rgb(239,112,239)",
  },
  stellar: {
    icon: (
      <img
        src="https://archives.bulbagarden.net/media/upload/thumb/9/9f/Stellar_icon.png/20px-Stellar_icon.png"
        decoding="async"
        loading="lazy"
        width="20"
        height="20"
        className="mw-file-element"
        srcSet="https://archives.bulbagarden.net/media/upload/thumb/9/9f/Stellar_icon.png/30px-Stellar_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/9/9f/Stellar_icon.png/40px-Stellar_icon.png 2x"
        data-file-width="180"
        data-file-height="180"
      ></img>
    ),
    color: "rgb(64,181,165)",
  },
};

export default typeIcons;
