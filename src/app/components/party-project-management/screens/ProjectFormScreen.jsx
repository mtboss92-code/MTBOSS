'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input } from '../shared';

export default function ProjectFormScreen() {
  const {
    submitAction, setMessage, projectForm, setProjectForm, saveProject,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <form onSubmit={(e) => submitAction.submit('project', () => saveProject(e), { successMessage: projectForm.id ? 'Project updated successfully' : 'Project added successfully', onError: setMessage })}>
        <h3>{projectForm.id ? 'Edit' : 'Add'} Project</h3>
        <div className="grid">
          <Input label="Project Name" name="name" value={projectForm.name} set={setProjectForm} required />
          <Input label="Site Address" name="site_address" value={projectForm.site_address} set={setProjectForm} />
          <Input label="Start Date" name="start_date" type="date" value={projectForm.start_date} set={setProjectForm} required />
          <Input label="Expected End Date" name="expected_end_date" type="date" value={projectForm.expected_end_date} set={setProjectForm} />
          <Input label="Contract Value (₹)" name="contract_value" type="number" step="any" min="0" value={projectForm.contract_value} set={setProjectForm} required />
          <Input label="Built-up Area (sq ft)" name="built_up_area" type="number" step="any" min="0" value={projectForm.built_up_area} set={setProjectForm} />
          <label>
            <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Status</small>
            <select
              value={projectForm.status || 'running'}
              onChange={(e) => setProjectForm((p) => ({ ...p, status: e.target.value }))}
            >
              <option value="running">Running</option>
              <option value="completed">Completed</option>
              <option value="on_hold">On Hold</option>
            </select>
          </label>
        </div>
        <p style={{ marginTop: 14 }}>
          <button type="submit" disabled={submitAction.isSubmitting('project')}>{submitAction.isSubmitting('project') ? 'Saving…' : (projectForm.id ? 'Save Edit Project' : 'Add Project')}</button>
        </p>
      </form>
    </>
  );
}
