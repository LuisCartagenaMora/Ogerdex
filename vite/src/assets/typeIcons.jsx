const typeIcons = {
  normal: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/20px-Normal_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/30px-Normal_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/40px-Normal_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  fighting: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/20px-Fighting_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/30px-Fighting_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/40px-Fighting_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  flying: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/20px-Flying_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/30px-Flying_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/40px-Flying_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  poison: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/20px-Poison_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/30px-Poison_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/40px-Poison_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  ground: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/20px-Ground_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/30px-Ground_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/40px-Ground_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  rock: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/20px-Rock_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/30px-Rock_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/40px-Rock_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  bug: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/20px-Bug_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/30px-Bug_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/40px-Bug_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  ghost: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/20px-Ghost_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/30px-Ghost_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/40px-Ghost_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  steel: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/20px-Steel_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/30px-Steel_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/40px-Steel_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  fire: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/20px-Steel_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/30px-Steel_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/40px-Steel_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  water: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/20px-Water_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/30px-Water_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/40px-Water_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  grass: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/20px-Grass_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/30px-Grass_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/40px-Grass_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  electric: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/20px-Electric_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/30px-Electric_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/40px-Electric_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  psychic: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/20px-Electric_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/30px-Electric_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/40px-Electric_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  ice: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/20px-Electric_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/30px-Electric_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/40px-Electric_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  dragon: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/20px-Dragon_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/30px-Dragon_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/40px-Dragon_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  dark: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/20px-Dragon_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/30px-Dragon_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/40px-Dragon_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  fairy: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/20px-Dragon_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/30px-Dragon_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/40px-Dragon_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
  stellar: (
    <img
      src="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/20px-Dragon_icon.png"
      decoding="async"
      loading="lazy"
      width="20"
      height="20"
      class="mw-file-element"
      srcset="https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/30px-Dragon_icon.png 1.5x, https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/40px-Dragon_icon.png 2x"
      data-file-width="64"
      data-file-height="64"
    ></img>
  ),
};

export default typeIcons;
