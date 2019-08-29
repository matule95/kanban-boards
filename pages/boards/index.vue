<template>
  <page title="Sprint AGOSTO 12-17" fluid :card="false">
    <div class="d-flex">
      <stage v-for="stage in stages" :key="stage.name" :title="stage.name">
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
    </div>
  </page>
</template>

<script>
import draggable from 'vuedraggable'
import Stage from '~/components/Stage'
import StageItem from '~/components/StageItem'
import Page from '~/components/Page'
export default {
  components: {
    Stage,
    StageItem,
    draggable,
    Page
  },
  data: () => ({
    stages: [
      {
        name: 'Todo',
        id: 'todo',
        items: [
          {
            title: '[FRONT] Validar campos 2',
            image: false,
            progress: 90
          },
          {
            title:
              'Ao preencher pessoas de contacto no campo de telefone deve selecionar o pais para aparecer prefixo e espaço para outras informações.',
            image: true,
            progress: 10
          },
          {
            title: 'Fazer Dashboard (admin e técnico) 2',
            image: false,
            progress: 20
          },
          {
            title: 'Desenhar tela de criação e alocação de tarefas 2',
            image: false,
            progress: 15
          }
        ]
      },
      {
        name: 'In Progress',
        id: 'inprogress',
        items: [
          {
            title: '[FRONT] Validar campos',
            image: false,
            progress: 20
          },
          {
            title: '[FRONT] Tela de Criação de Tarefas',
            image: true,
            progress: 55
          },
          {
            title: 'Criar secções para step 3 de homologação',
            image: false,
            progress: 70
          },
          {
            title: 'Adicionar "Outros Processos" ao sidebar',
            image: false,
            progress: 10
          },
          {
            title: 'Implementar Gráficos no Dashboard',
            image: false,
            progress: 100
          }
        ]
      },
      {
        name: 'QA',
        id: 'qualityassurance',
        items: [
          {
            title: 'Avaliação de Desempenho',
            image: false,
            progress: 20
          }
        ]
      },
      {
        name: 'Done',
        id: 'Done',
        items: [
          {
            title: 'Done Task 1',
            image: false,
            progress: 100
          },
          {
            title: 'Done Task 2',
            image: true,
            progress: 100
          }
        ]
      }
    ],
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
    }
  }
}
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.5s;
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
