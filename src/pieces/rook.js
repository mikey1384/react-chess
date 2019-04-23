export default function Rook(player) {
  return {
    player,
    style: {
      backgroundImage: `url('${
        player === 1
          ? 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'
          : 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg'
      }')`
    },
    isMovePossible(src, dest) {
      const srcRow = Math.floor(src / 8);
      const srcColumn = src % 8;
      const destRow = Math.floor(dest / 8);
      const destColumn = dest % 8;
      return srcRow === destRow || srcColumn === destColumn;
    },
    getSrcToDestPath(src, dest) {
      let path = [];
      let pathStart;
      let pathEnd;
      let incrementBy;
      if (src > dest) {
        pathStart = dest;
        pathEnd = src;
      } else {
        pathStart = src;
        pathEnd = dest;
      }
      if (Math.abs(src - dest) % 8 === 0) {
        incrementBy = 8;
        pathStart += 8;
      } else {
        incrementBy = 1;
        pathStart += 1;
      }

      for (let i = pathStart; i < pathEnd; i += incrementBy) {
        path.push(i);
      }
      return path;
    }
  };
}
