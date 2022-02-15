<template>
  <div class="content">
    <!--
    The _editable attribute makes the next
    DOM-element clickable so the side by side editor can
    show the right component.
    -->
    <div
      v-editable="blok"
      class="teaser__inner"
    >
      <p>
        <rich-text-renderer
          v-if="blok"
          :document="blok.text.content"
        />
      </p>
    </div>
  </div>
</template>

<script>
    import PlanService from "../../services/plan";

    export default {
  name: 'Description',
        props: ['blok'],
        data() {
            return {
                packages: []
            }
        },
        created() {
            this.packages = PlanService.getPackages();
            if (this.packages.length === 0) {
                this.$store.commit("StateSbPurchaseButton", true);
            }
        },
}
</script>
