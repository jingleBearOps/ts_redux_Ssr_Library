function createData(
    name: string,
    price: number,
    category: string,
  ) {
    return { name, price, category};
  }
  
  export const rows = [
    createData('Frozen yoghurt', 159,"asdashdasd"),
    createData('Ice cream sandwich', 237,"asdashdasd"),
    createData('Eclair', 262,"asdashdasd"),
    createData('Cupcake', 305,"asdashdasd"),
    createData('Gingerbread', 356,"asdashdasd"),
  ];