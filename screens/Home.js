import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import {Colors, icons, images} from '../constants';
import appTheme from '../constants/theme';

const Home = () => {
  // Dummy Datas

  const intialCurrentLocation = {
    streetName: 'Pakistan',
    gps: {
      latitude: 24.8607,
      longitude: 67.0011,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: 'Rice',
      icon: icons.riceBowl,
    },
    {
      id: 2,
      name: 'Noodle',
      icon: icons.noodle,
    },
    {
      id: 3,
      name: 'Pizza',
      icon: icons.pizza,
    },
    {
      id: 4,
      name: 'Snacks',
      icon: icons.snacks,
    },

    {
      id: 5,
      name: 'Drinks',
      icon: icons.drink,
    },
    {
      id: 6,
      name: 'Desserts',
      icon: icons.dessert,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: 'ByProgrammers Burger',
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.burgerRestaurant1,
      duration: '30 - 45 min',
      location: {
        latitude: 24.9384,
        longitude: 67.0538,
      },
      courier: {
        avatar: images.avatar1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Crispy Chicken Burger',
          photo: images.crispyChickenBurger,
          desciption: 'Burger with crispy chicken, cheese and lettuce',
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: 'Crispy Chicken Burger with Honey Mustard',
          photo: images.honeyMustardChickenBurger,
          desciption: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 15,
        },
      ],
    },
    {
      id: 2,
      name: 'ByProgrammers Pizza',
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.pizzaRestaurant1,
      duration: '15 - 20 min',
      location: {
        latitude: 24.9014,
        longitude: 67.1155,
      },
      courier: {
        avatar: images.avatar2,
        name: 'Jackson',
      },
      menu: [
        {
          menuId: 1,
          name: 'Hawaiian Pizza',
          photo: images.hawaiianPizza,
          desciption: 'Canadian, homemade pizza crust, pizza sauce',
          calories: 250,
          price: 15,
        },
        {
          menuId: 2,
          name: 'Tomato & Basil Pizza',
          photo: images.honeyMustardChickenBurger,
          desciption: 'Fresh tomatoes, aromatic basil pesto',
          calories: 350,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    intialCurrentLocation,
  );
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );
    setSelectedRestaurant(restaurantList);
    setSelectedCategory(category);
  }

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          paddingLeft: 20,
          paddingTop: 10,
        }}>
        <TouchableOpacity>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: Colors.secondary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={appTheme.Sizes.h3}>{currentLocation.streetName}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: 10,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            padding: 10,
            paddingBottom: 20,
            backgroundColor:
              selectedCategory?.id == item.id ? Colors.primary : Colors.white,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}
          onPress={() => onSelectCategory(item)}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? Colors.white
                  : Colors.secondary,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              color:
                selectedCategory?.id == item.id ? Colors.white : Colors.black,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{padding: 20}}>
        <Text
          style={{
            ...appTheme.Sizes.h1,
          }}>
          Main
        </Text>
        <Text
          style={{
            ...appTheme.Sizes.h1,
          }}>
          Categories
        </Text>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={items => `${items.id}`}
          renderItem={renderItem}
          contentContainerStyle={{padding: 10}}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity style={{marginBottom: 20}}>
          <Image
            source={item.photo}
            resizeMode="contain"
            style={{
              width: '100%',
              height: 200,
              borderRadius: 20,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: 200,
              backgroundColor: Colors.white,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: appTheme.Sizes.h4}}>{item.duration}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

export default Home;
