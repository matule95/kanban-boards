<template>
  <table class="mb-3">
    <tr>
      <td>
        <b-row no-gutters>
          <b-col md="12" class="p-0 font-weight-bold mb-2 label"
            >Pesquisar</b-col
          >
          <b-col md="12" class="p-0 d-flex">
            <b-form-input
              placeholder="Nome, Número da Tarefa, Responsável"
            ></b-form-input>
          </b-col>
        </b-row>
      </td>
      <td>
        <b-row>
          <b-col class="row no-gutters" md="6">
            <b-col md="12" class="p-0 font-weight-bold mb-2 label"
              >Ordenar</b-col
            >
            <b-col md="12" class="p-0 d-flex">
              <b-form-select v-model="order" :options="orderBy"></b-form-select>
            </b-col>
          </b-col>
          <b-col class="row no-gutters" md="6">
            <b-col md="12" class="p-0 font-weight-bold mb-2 label">Visão</b-col>
            <b-col md="12" class="p-0 d-flex">
              <b-col class="p-0 text-center" md="6">
                <span class="font-weight-bold text-primary">
                  <icon icon="book-open"></icon> Board
                </span>
              </b-col>
              <b-col class="p-0 text-center" md="6">
                <span class="text-muted">
                  <icon icon="tasks"></icon> List
                </span>
              </b-col>
            </b-col>
          </b-col>
        </b-row>
      </td>
      <td>
        <b-col class="row no-gutters p-0" md="6">
          <b-col md="12" class="p-0 font-weight-bold mb-2 label">Membros</b-col>
          <b-col md="12" class="p-0 d-flex" align-self="end">
            <avatar size="sm" class="px-1" />
            <avatar size="sm" class="px-1" />
            <avatar size="sm" class="px-1" />
            <avatar size="sm" class="px-1" />
          </b-col>
        </b-col>
      </td>
    </tr>
  </table>
</template>

<script>
import Avatar from '~/components/Avatar'
import Icon from '~/components/Icon'
export default {
  components: {
    Avatar,
    Icon
  },
  data: () => ({
    order: null
  }),
  computed: {
    orderBy() {
      return [
        {
          value: null,
          text: 'Ordenar Por'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables';
table {
  border-collapse: separate;
  border-spacing: 20px 0px;
  margin-left: -20px;
  td {
    width: 345px;
    .label {
      font-size: 0.875rem;
    }
  }
  .form-control,
  .custom-select {
    box-shadow: 0 0.4rem 0.8rem -0.1rem rgba(0, 32, 128, 0.1), 0 0 0 1px #f0f2f7;
    border-radius: 0;
    border: 1px solid #e0e7ff;
    font-size: 0.875rem;
    &::placeholder {
      color: #8798ad;
    }
  }
}
</style>
