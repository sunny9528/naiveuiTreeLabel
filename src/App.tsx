import { defineComponent, VNodeChild } from 'vue';
import styled from './app.module.less';
import { TreeOption, NEllipsis, NTree } from 'naive-ui';

interface IRenderLabelParams {
  option: TreeOption;
  checked: boolean;
  selected: boolean;
}

export default defineComponent({
  setup() {
    const option = [
      {
        key: 1,
        label: '第一季',
        children: [
          {
            key: '1-1',
            label: '第一季第一级',
          },
          {
            key: '1-2',
            label: '第一季第二级第一季第二级第一季第二级第一季第二级第一季第二级',
          },
          {
            key: '1-3',
            label: '第一季第三级',
          },
          {
            key: '1-4',
            label: '第一季第四级',
          },
        ],
      },
      {
        key: 2,
        label: '第二季',
        children: [
          {
            key: '2-1',
            label: '第二季第一级',
          },
          {
            key: '2-2',
            label: '第二季第二级',
          },
          {
            key: '2-3',
            label: '第二季第三级',
          },
          {
            key: '2-4',
            label: '第二季第四级',
          },
        ],
      },
    ];
    const renderLabel = (info: IRenderLabelParams): VNodeChild => {
      return (
        <NEllipsis
          style={{ width: '100%', textAlign: 'left' }}
          v-slots={{
            tooltip: () => info.option.label,
            default: () => <span>{info.option.label}</span>,
          }}
        />
      );
    };
    return {
      option,
      renderLabel,
    };
  },
  render() {
    return (
      <div class={styled['box']}>
        <NTree blockLine expandOnClick data={this.option} renderLabel={this.renderLabel}></NTree>
      </div>
    );
  },
});
