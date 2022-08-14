<template>
  <div class="itemContact">
    <slot></slot>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value, modelValue)"
      placeholder="Câu trả lời của bạn"
      class="inputContact"
      :class="[widthInput ? 'width100' : 'width50']"
    />
    <slot name="errors" class="error"></slot>
  </div>
</template>
<script>
import { Field } from "vee-validate";

export default {
  components: {
    Field,
  },

  props: {
    modelValue: {
      type: String,
    },
    widthInput: {
      type: Boolean,
    },
  },

  emits: ["update:modelValue"],
  // created() {
  //   console.log(this.widthInput);
  // },
  // computed: {
  //   widthInputContact() {
  //     return {
  //       this.modelValue ? "width100" : "width50"
  //     }
  //   }
  // }
};
</script>
<style scoped>
.error {
  color: red;
}
</style>
