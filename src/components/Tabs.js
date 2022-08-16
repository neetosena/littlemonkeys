import React from "react";

const Tabs = () => {
  return (
    <div className="tabs-container">
      <div className="tabs-items-container">
        <ul>
          <li>Little Monkeys Playschool</li>
          <li>ECCE Preschool Scheme</li>
          <li>Afterschool Service</li>
        </ul>
        <div className="tabs-description-container">
          <div className="tab-description">
            <img src="" alt="" />
            <ul>
              <li>
                Little Monkeys provides breakfast club and early morning drop
                off to local schools (subject to demand).
              </li>
              <li>
                We then collect children from school and bring them back to the
                afterschool service .
              </li>
              <li>
                A homework club operates, where staff are able to assist and
                help as necessary.
              </li>
              <li>Nutritious snacks are provided.</li>
              <li>
                Children have the opportunity to relax and socialise, take part
                in games, enjoy arts and crafts and play in the secure outdoor
                area.
              </li>
            </ul>
          </div>

          <div className="tab-description">
            <img src="" alt="" />
            <p>
              <strong>
                Little Monkeys Playschool is a child-centred, play-based
                environment, where each child is supported and encouraged to
                have fun as they learn.
              </strong>
            </p>
            <ul>
              <li>
                We are a professional, qualified, and caring team. We aim to
                provide a safe, secure, and fun environment for your child to
                grow and develop, in preparation for primary school. We have an
                open door policy
              </li>
              <li>
                We follow a child-led emerging curriculum, using a play based
                approach. This is informed by Aistear the Early Childhood
                Curriculum Framework.
              </li>
              <li>
                We understand children develop through play, as this is how
                children interact and learn about the world around them, both
                indoors and outdoors.
              </li>
              <li>
                At Little Monkeys we believe in an inclusive approach to
                learning, welcoming all children and working in partnership with
                all families. We believe every child has ability and develops at
                their own pace.
              </li>
              <li>
                Our curriculum promotes the holistic development of every child.
                We aim to foster independence, self-belief, social skills, and
                problem solving abilities.
              </li>
              <li>
                Your child’s learning journey is documented through both
                observations and the compilation of a learning journal which are
                shared with the child and parents.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
