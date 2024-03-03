import Route from "@ember/routing/route";
import EmberObject from "@ember/object";

let Song = EmberObject.extend({
  title: "",
  band: "",
  rating: 0,
});

export default Route.extend({
  model: function () {
    let blackDog = Song.create({
      title: "BlackDog",
      band: "Led Zeppelin",
      rating: 3,
    });

    let yellowLedbetter = Song.create({
      title: "Yellow Ledbetter",
      band: "Pearl Jam",
      rating: 4,
    });

    let pretender = Song.create({
      title: "The Pretenders",
      band: "Foo Fighters",
      rating: 2,
    });

    return [blackDog, yellowLedbetter, pretender];
  },
});