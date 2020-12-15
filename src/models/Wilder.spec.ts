import { getDisplayName, TrainingType } from './Wilder';

describe('getDisplayName', () => {
  describe('when not passed city', () => {
    it('returns question mark and full name', () => {
      expect(getDisplayName('Lucie', 'Laforêt')).toEqual('[?] Lucie Laforêt');
    });
  });

  describe('when passed city', () => {
    describe('when passed city without custom code', () => {
      it('returns city and full name', () => {
        expect(getDisplayName('Lucie', 'Laforêt', 'Marseille')).toEqual(
          '[Marseille] Lucie Laforêt'
        );
      });
    });

    describe('when passed city with custom code', () => {
      it('returns city code and full name', () => {
        expect(getDisplayName('Lucie', 'Laforêt', 'Paris')).toEqual(
          '[PAR] Lucie Laforêt'
        );
      });
    });
  });

  describe('when passed WORK_AND_STUDY as training type', () => {
    describe('when not passed city', () => {
      it('returns wns label and full name', () => {
        expect(
          getDisplayName('Lucie', 'Laforêt', '', TrainingType.WORK_AND_STUDY)
        ).toEqual('[? - WnS] Lucie Laforêt');
      });
    });
    describe('when passed city without code', () => {
      it('returns city and wns label and full name', () => {
        return expect(
          getDisplayName(
            'Lucie',
            'Laforêt',
            'Marseille',
            TrainingType.WORK_AND_STUDY
          )
        ).toEqual('[Marseille - WnS] Lucie Laforêt');
      });
    });
  });
});

// Si on passe 'WORK_AND_STUDY' en trainingType, le display name vaut :[? - WnS] Lucie Laforêt
