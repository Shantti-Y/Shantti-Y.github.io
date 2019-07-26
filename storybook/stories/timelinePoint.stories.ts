import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import TimelinePoint from '@/components/atoms/TimelinePoint.vue';

storiesOf('atoms/TimelinePoint', module)
  .add('plane', () => ({
    components: { TimelinePoint },
    template: '<timeline-point />'
  }))
  ;