<template>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    :initial-values="contact"
    v-slot="{ handleReset }"
  >
    <div class="itemContact border-top">
      <h1>Thông tin liên hệ</h1>
      <p>Thiết kế website liên hệ đặt quảng cáo lên Google.com</p>
      <hr class="my-8" />
      <span class="required">*Bắt buộc </span>
    </div>

    <div class="itemContact">
      <p>Tên <span class="required">*</span></p>
      <Field
        name="name"
        class="inputContact"
        placeholder="Câu trả lời của bạn"
      />
      <ErrorMessage name="name" class="T-error" />
    </div>
    <div class="itemContact">
      <p>Email <span class="required">*</span></p>
      <Field
        name="email"
        type="email"
        class="inputContact"
        placeholder="Câu trả lời của bạn"
      />
      <ErrorMessage name="email" class="T-error" />
    </div>
    <div class="itemContact">
      <p>Địa chỉ <span class="required">*</span></p>
      <Field
        name="address"
        class="inputContact"
        placeholder="Câu trả lời của bạn"
        :class="'width100'"
      />
      <ErrorMessage name="address" class="T-error" />
    </div>
    <div class="itemContact">
      <p>Số điện thoại <span class="required">*</span></p>
      <Field
        name="phoneNumber"
        class="inputContact"
        placeholder="Câu trả lời của bạn"
      />
      <ErrorMessage name="phoneNumber" class="T-error" />
    </div>
    <div class="itemContact">
      <p>Website</p>
      <Field
        name="website"
        type="url"
        class="inputContact"
        placeholder="Câu trả lời của bạn"
      />
      <ErrorMessage name="website" class="T-error" />
    </div>
    <div class="itemContact">
      <p>Ghi chú</p>
      <Field
        name="note"
        class="inputContact"
        placeholder="Câu trả lời của bạn"
        :class="'width100'"
      />
      <ErrorMessage name="note" class="T-error" />
    </div>

    <div class="actionForm">
      <button type="submit" class="btn-submit">Gửi</button>
      <p @click="handleReset" class="T-green">Xóa hết câu trả lời</p>
    </div>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";

export default {
  name: "App",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema = yup.object({
      name: yup.string().required("* vui lòng nhập tên"),
      email: yup.string().required("* vui lòng nhập email").email(),
      address: yup.string().required("* vui lòng nhập địa chỉ"),
      phoneNumber: yup
        .string()
        .required("* vui lòng nhập số điện thoại")
        .matches(phoneRegExp, "Phone number is not valid"),

      website: yup.string().url("url không hợp lệ"),
    });
    const contact = {
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      website: "",
      note: "",
    };
    return {
      contact,
      schema,
    };
  },
  methods: {
    async onSubmit(values, { resetForm }) {
      await axios
        .post("http://localhost:8080/api/contact", values)
        .then((response) => {
          console.log(response);
          resetForm();
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
};
</script>
<style scoped>
.actionForm {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
