export type QcmProps = {
    id?: string;
    title: string;
  };
  
  export class Qcm {
    public constructor(public readonly id: string, public title: string) {}
  
    static create(props: QcmProps): Qcm {
      const qcm = new Qcm(props.id, props.title);
      return qcm;
    }
  }
  