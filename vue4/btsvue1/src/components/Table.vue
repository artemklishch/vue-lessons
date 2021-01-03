<template>
  <div>
    <b-breadcrumb class="breadcr">
      <b-breadcrumb-item
        class="breadcr__item"
        v-for="item in items"
        :key="item.text"
        :text="item.text"
      />
    </b-breadcrumb>
    <b-card-title title-tag="h4">Мои грузы</b-card-title>
    <b-card-group body-tag="div" class="cargo-table">
      <b-card-header header-tag="div" header-class="cargo-table__header">
        <section class="cargo-table__header_hblock">
          <div>
            <b-card-sub-title>Дата принятия груза</b-card-sub-title>
            <b-card-text>22.01.2018 - 27.02.2018</b-card-text>
          </div>
          <b-icon-calendar scale="1.5" />
        </section>
        <section class="cargo-table__header_hblock"></section>
        <section class="cargo-table__header_hblock"></section>
        <section class="cargo-table__header_hblock"></section>
        <section class="cargo-table__header_hblock"></section>
      </b-card-header>
    </b-card-group>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          href: "#",
        },
        {
          text: "Library",
          active: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.breadcr {
  background-color: #fff;
}
.breadcrumb-item a {
  color: grey !important;
}
.breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "\\";
}
.breadcrumb-item:first-child::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "";
}

.cargo-table {
  background-color: #fff;
}
.cargo-table__header_hblock {
  display: flex;
  width: calc(100% / 5);
}
.card-header {
  padding: 10px;
}
</style>
