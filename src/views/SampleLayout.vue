<template lang="pug">
.container
  h1 Layouts
  h2 12-span grid
  .grid
    .grid__col-12
      span col 12
    .grid__col-6
      span col 6
    .grid__col-4
      span col 4
  h2 Columns -> grow
  .column__grid.column__grid--grow
    .column__item
      span column 1
    .column__item
      span column 2
    .column__item
      span column 3
    .column__item
      span column 4
  h2 Columns -> no grow
  .column__grid.column__grid--no-grow
    .column__item
      span column 1
    .column__item
      span column 2
    .column__item
      span column 3
    .column__item
      span column 4
  h2 Cards Line Up -> content adapts to other cards
  .card__container
    .card__item
      .card__title 
        h3 Card Title
      .card__content Card short description
      .card__image
    .card__item
      .card__title 
        h3 Card Title
      .card__content Card Long description. Lorem ipsum dolor sit, amet consectetur adipisicind elit.
      .card__image
    .card__item
      .card__title 
        h3 Card Title
      .card__content Card medium description. Lorem ipsum
      .card__image
  h2 Flex columns stretch
  .flex__container
    .flex__box
      span 1
    .flex__box
      span 2
    .flex__box
      span 3
  h2 Flex columns fixed sixe
  .flex__container
    .flex__box--grow
      span 1
    .flex__box--grow
      span 2
    .flex__box--grow
      span 3
</template>

<style lang="sass" scoped>
.grid
  display: grid
  grid-template-columns: repeat(12, 1fr)
  &__col-12
    grid-column: 1 / 13
    outline: 1px solid red
  &__col-6
    grid-column: 1 / 7
    outline: 1px solid red
  &__col-4
    grid-column: 4 / 9
    outline: 1px solid red

.column
  &__grid
    display: grid
    grid-gap: variables.$gutter*4
    &--grow
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
    &--no-grow
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
  &__item
    outline: 1px solid red
  

.card
  &__container
    height: auto
    display: grid
    grid-gap: variables.$gutter*4
    grid-template-columns: repeat(3, 1fr)
  &__item
    outline: 1px solid red
    display: flex
    flex-direction: column
    padding: variables.$gutter*4
    justify-content: space-between
  &__title
  &__image
    width: 100px
    height: 100px
    background:#e6e6e6

.flex
  &__container
    display: flex
    flex-wrap: wrap
    justify-content: center
  &__box
    flex: 1 1 250px
    margin: 5px
    outline: 1px solid red
  &__box--grow
    flex: 1 1 250px
    flex: 0 1 250px
    margin: 5px
    outline: 1px solid red
</style>