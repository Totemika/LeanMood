import * as React from 'react';
import {Link} from 'react-router';


//<Link to="/students/training">Go to students</Link>
//<Link to="/students/training">Go to trainings</Link>
export class ListTrainingPage extends React.Component<{}, {}> {
   public render() {
       return (
         <div>
           <span> List Training Page: </span>
           <br/>
           <br/>
           <Link to="/admin/training/edit">Go to training edit</Link>
           <Link to="/admin">Back to Dashboard</Link>

         </div>
        );
  }
}
