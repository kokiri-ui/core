import { TabNavFlag } from 'petals-ui/dist/tab-bar';
import { ITabPaneComponent, TabPaneHeadlessComponent } from 'petals-ui/dist/tabs';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TabPaneStructuralComponent
  extends BaseStructuralComponent<TabPaneHeadlessComponent>
  implements ITabPaneComponent {
  @Prop({ type: [Number, String] })
  public readonly flag!: TabNavFlag;

  /**
   * 选项卡文本
   */
  @Prop({ type: String, required: true })
  public readonly label!: string;

  public created(): void {
    this.setHeadlessComponent(new TabPaneHeadlessComponent(this));
  }
}

export { TabPaneStructuralComponent };
