<template>
  <div
          v-editable="blok"
          style=" margin-top: 100px; margin-bottom:25px;"
  >
    <template v-for="item in blok.body">
      <component
        :is="item.component"
        :key="item._uid"
        :blok="item"
      />
    </template>
  </div>
</template>

<script>
    import Teaser from './Teaser';
    import Description from './Description';
    import SbBackButton from '../DetailsPlans/SbBackButton';
    import SbPurchaseButton from "../DetailsPlans/SbPurchaseButton";
    import SbServicesPurchaseButton from "../DetailsPlans/SbServicesPurchaseButton";

    export default {
  name: 'Page',
    components: {Teaser, Description, SbPurchaseButton, SbBackButton, SbServicesPurchaseButton},
  props: ['blok']
}
</script>
