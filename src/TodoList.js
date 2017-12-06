import {Config} from 'metal-state';
import Component from 'metal-component';
import core from 'metal';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import templates from './TodoList.soy.js';

import './todo-list.scss';

class TodoList extends Component {
    add(event) {
        event.preventDefault();

        this.setState({
            tasks: this.tasks.concat({
                id: core.getUid(),
                title: event.target.value,
            })
        });

        this.incompletedCount += 1;
        event.target.value = '';
    }
}

TodoList.STATE = {
    tasks: Config.arrayOf(Config.shapeOf(
        {
            id: Config.number(),
            title: Config.string()
        }
    )).value([])
}

Soy.register(TodoList, templates);

export { TodoList };
export default TodoList;
