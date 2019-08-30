<template>
  <page title="Sprint AGOSTO 12-17" fluid :card="false">
    <b-container fluid>
      <b-row>
        <b-col class="p-0 mb-2" md="12">
          <members />
        </b-col>
        <perfect-scrollbar>
          <b-col class="p-0 d-flex mb-5" md="12">
            <stage
              v-for="stage in stages"
              :key="stage.name"
              :title="stage.name"
            >
              <draggable
                class="list-group"
                :list="stage.items"
                group="items"
                v-bind="dragOptions"
                @start="drag = true"
                @end="drag = false"
              >
                <transition-group
                  type="transition"
                  :name="!drag ? 'flip-list' : null"
                >
                  <stage-item
                    v-for="todo in stage.items"
                    :key="todo.title"
                    class="list-group-item"
                    :item="todo"
                    @click.native="$emit('stage-item-click', todo)"
                  ></stage-item>
                </transition-group>
              </draggable>
            </stage>
          </b-col>
        </perfect-scrollbar>
      </b-row>
      <floating-button></floating-button>
    </b-container>
  </page>
</template>

<script>
import draggable from 'vuedraggable'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import Stage from '~/components/Stage'
import StageItem from '~/components/StageItem'
import Page from '~/components/Page'
import Members from '~/components/Members'
import FloatingButton from '~/components/FloatingButton'
import { apiDataToStateObject } from '~/utils'
export default {
  components: {
    Stage,
    StageItem,
    draggable,
    Page,
    PerfectScrollbar,
    FloatingButton,
    Members
  },
  data: () => ({
    drag: false
  }),
  computed: {
    dragOptions() {
      return {
        animation: 500,
        group: 'items',
        disabled: false,
        ghostClass: 'ghost',
        easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      }
    },
    stages() {
      return apiDataToStateObject(require('~/utils/data').stages)
    }
  }
}
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.25s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
</style>
