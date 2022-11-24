import "dotenv/config"
import { Sequelize, Model, DataTypes as T } from 'sequelize'

const sequelize = new Sequelize(
    "database",
    "user",
    "password",
    {
      host: "0.0.0.0",
      dialect: "sqlite",
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      storage: "../database.sqlite"
    }
  );

const Message = sequelize.define('Message', {
    time: {
        type: T.DATE,
        allowNull: false
    },
    text: {
        type: T.STRING, 
        allowNull: false
    },
    id: {
        type: T.UUID,
        defaultValue: T.UUIDV4,
        allowNull: false, 
        unique: true,
        primaryKey: true
    }
})

const User = sequelize.define('User', {
    username: {
        type: T.STRING, 
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: T.STRING, 
        allowNull: false 
    },
})

const Room = sequelize.define('ChatRoom', {
    id: {
        type: T.UUID,
        defaultValue: T.UUIDV4,
        allowNull: false, 
        unique: true,
        primaryKey: true
    },
    name: {
        type: T.STRING, 
    }
})

const Chat = sequelize.define("Room", {
    id: {
        type: T.UUID,
        defaultValue: T.UUIDV4,
        allowNull: false, 
        unique: true,
        primaryKey: true
    }
})

Room.hasMany(Message, { onDelete: "cascade" })
Message.hasOne(User, { onDelete: "cascade" })
Room.belongsToMany(User, { through: Chat })
User.belongsToMany(Room, { through: Chat })


export { User, Room, Message, Chat, sequelize }