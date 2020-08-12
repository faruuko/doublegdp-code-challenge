require "rails_helper"

RSpec.describe "Tasks", type: :request do
  let!(:tasks) { create(:task) }
  let(:task_id) { tasks.id }

  describe "GET /tasks" do
    before { get "/tasks" }

    it "returns status code 200" do
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /tasks" do
    context "when the request is valid" do
      before { post "/tasks/create", params: { description: "Haircut? Need two!" } }
      it "creates a task" do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "PATCH /tasks/:id" do
    context "when the request is valid" do
      before { patch "/tasks/#{task_id}" }
      it "updates a task" do
        expect(response).to have_http_status(204)
      end
    end
  end

end