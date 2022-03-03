import { Component, Prop } from 'vue-property-decorator';

import { IDropdownMenuComponent, DropdownMenuHeadlessComponent } from 'petals-ui/dist/dropdown';

import { BaseStructuralComponent } from '../basic';

@Component
class DropdownMenuStructuralComponent
  extends BaseStructuralComponent<DropdownMenuHeadlessComponent>
  implements IDropdownMenuComponent {
  @Prop({ type: String })
  public readonly defaultActiveFlag!: string;

  @Prop({ type: String })
  public readonly activeFlag!: string;

  @Prop({ type: Array })
  public readonly defaultOpenFlags!: string[];

  @Prop({ type: Array })
  public readonly openFlags!: string[];

  public created(): void {
    this.setHeadlessComponent(new DropdownMenuHeadlessComponent(this));
  }
}

export { DropdownMenuStructuralComponent };
