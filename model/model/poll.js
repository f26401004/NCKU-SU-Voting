module.exports = function(sequelize, DataTypes) {
  var poll = sequelize.define('poll', {
    name: {
      type: Sequelize.STRING(20),
    },
    choice: {
      type: DataTypes.INTEGER,
    }
  });

  return poll;
}
