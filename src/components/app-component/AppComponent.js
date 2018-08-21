import $ from 'jquery';
import { View } from 'backbone';
import template from './template.ejs'
import PersonContainer from '../person-container';

export default class App extends View {
  constructor(attributes) {
    super(attributes)
    this.listenTo(this.model, 'change', this.render);
  }

  get el () {
    return '#app'
  }

  get template () {
    return template
  }

  get events () {
    return {
      'click button': this.onClickButton
    }
  }

  initialize () {
    this.personContainer = new PersonContainer({ collection: this.model.attributes.persons });
    this.render()
  }

  render () {
    const temp = this.template(this.model.attributes);
    this.$el.html(temp)
    this.personContainer.$el = $('#persons')
    this.personContainer.render()
    // this.personContainer.setElement('#persons').render();
    return this;
  }
  /**
   *
   * @param {JQuery.Event} e
   */
  onClickButton (e) {
    console.log(e);
    let counter = this.model.get('counter') + 1;
    console.log(this.model.set({ counter }));
  }
}
