import { Sequelize, Model, DataTypes } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://postgres:secret@localhost:5432/postgres"
);

class Item extends Model {
  public barcode!: number;
  public name!: string;
  public expireDate!: string | null; // for nullable fields
}

Item.init(
  {
    barcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    expireDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "items",
    sequelize, // passing the `sequelize` instance is required
  }
);

// async function doStuffWithItemModel() {
//   const newItem = await Item.create({
//     name: "Johnny",
//   });
//   // console.log(newItem.id, newItem.name, newItem.preferredName);

//   const foundItem = await Item.findOne({ where: { name: "Johnny" } });
//   if (foundItem === null) return;
//   console.log(foundItem.name);
// }
